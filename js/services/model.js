/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
"use strict";
var Model;
(function (Model) {
    //#region order constants
    var shippingRanges = [
        { to: 40, price: 14.95 },
        { to: 80, price: 15.95 },
        { to: 100, price: 16.95 },
        { to: 200, price: 18.95 },
        { to: null, price: 10.00 },
    ];
    var stateTaxes = [
        { state: 'IL', food: 2.25, other: 9.0 },
        { state: 'ON', food: 13.0, other: 13.0 }
    ];
    var ship3rdBusinessDayPrice = 30.0;
    var ship2ndBusinessDayPrice = 40.0;
    var shipLargeOrderPrice = 10.0;
    //#endregion
    var Order = (function () {
        function Order() {
            //#region order fields
            this.id = '';
            this.created = '';
            this.items = [];
            this.billingAddress = new Address();
            this.shipToBillingAddress = true;
            this.shippingAddress = new Address();
            this.shippingType = 0;
            this.isGift = false;
            this.giftNote = '';
            this.giftRecipientPhone = '';
            this.giftInstructions = '';
            this.cardType = 'Visa';
            this.cardHolder = '';
            this.cardNumber = '';
            this.cardExpiration = '';
            this.cardSecurityCode = '';
        }
        //#endregion
        Order.prototype.isValid = function () {
            return this.billingAddress.isValidAll() && (this.shipToBillingAddress || this.shippingAddress.isValid());
        };
        Object.defineProperty(Order.prototype, "validCard", {
            //#region verify card
            get: function () {
                return false; //checkCreditCard(this.cardNumber, this.cardType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "firstName", {
            //#endregion
            //#region virtual properties
            get: function () {
                return this.billingAddress.firstName;
            },
            set: function (value) {
                this.billingAddress.firstName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "lastName", {
            get: function () {
                return this.billingAddress.lastName;
            },
            set: function (value) {
                this.billingAddress.lastName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "email", {
            get: function () {
                return this.billingAddress.email;
            },
            set: function (value) {
                this.billingAddress.email = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "phone", {
            get: function () {
                return this.billingAddress.phone;
            },
            set: function (value) {
                this.billingAddress.phone = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "total", {
            //#endregion
            //#region totals
            get: function () {
                return this.subTotal + this.totalTax + this.shippingPrice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "subTotal", {
            get: function () {
                var sum = 0;
                this.items.forEach(function (item) { return sum += item.total; });
                return sum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "itemCount", {
            get: function () {
                var count = 0;
                this.items.forEach(function (item) { return count += item.count; });
                return count;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "shippingPrice", {
            get: function () {
                var price = this.subTotal;
                if (price <= 0)
                    return 0;
                var shipType = this.shippingType || 0;
                // 3er business day
                if (shipType == 1)
                    return ship3rdBusinessDayPrice;
                // 2nd business day
                if (shipType == 2)
                    return ship2ndBusinessDayPrice;
                // standard
                var count = shippingRanges.length;
                for (var i = 0; i < count; i++) {
                    var range = shippingRanges[i];
                    if (!range.to || price < range.to) {
                        return range.price;
                    }
                }
                return shipLargeOrderPrice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "totalTax", {
            get: function () {
                var stateTax = this.getStateTax();
                if (!stateTax)
                    return 0.0;
                var food = 0.0;
                var other = 0.0;
                this.items.forEach(function (item) {
                    if (item.food) {
                        food += item.total;
                    }
                    else {
                        other += item.total;
                    }
                });
                return (stateTax.food * food + stateTax.other * other) / 100.0;
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#region public methods
        // add a food item
        Order.prototype.add = function (name, vol, price) {
            price = this.fixPrice(price);
            var prodId = this.getProductId(name, vol);
            var prod = this.findProduct(prodId);
            if (!prod) {
                prod = new Model.OrderItem(prodId, +price, 1, true); // is food
                this.items.push(prod);
            }
            else {
                prod.count++;
            }
            return prod.count;
        };
        // add a non-food item
        Order.prototype.addItem = function (name, price) {
            price = this.fixPrice(price);
            var prodId = this.getProductId(name, null);
            var prod = this.findProduct(prodId);
            if (!prod) {
                prod = new Model.OrderItem(prodId, +price, 1, false); // is not food
                this.items.push(prod);
            }
            else {
                prod.count++;
            }
            return prod.count;
        };
        // add by id for the cart (+)
        Order.prototype.addById = function (prodId) {
            var prod = this.findProduct(prodId);
            if (prod) {
                prod.count++;
            }
        };
        // remove by id and volume for the cart (-)
        Order.prototype.remove = function (name, vol) {
            var prodId = this.getProductId(name, vol);
            var prod = this.findProduct(prodId);
            this.removeOne(prod);
            return prod ? prod.count : 0;
        };
        // remove by id for the cart (-)
        Order.prototype.removeById = function (prodId) {
            var prod = this.findProduct(prodId);
            this.removeOne(prod);
            return prod ? prod.count : 0;
        };
        // clear all items
        Order.prototype.clear = function () {
            this.items = [];
        };
        //#endregion
        //#region implementation
        Order.prototype.getProductId = function (name, vol) {
            return !!vol ? name + ' (' + vol + ')' : name;
        };
        Order.prototype.findProduct = function (name) {
            var items = this.items;
            var count = items ? items.length : 0;
            for (var i = 0; i < count; i++)
                if (items[i].name === name)
                    return items[i];
            return null;
        };
        Order.prototype.fixPrice = function (price) {
            return (!!price && price.length > 0 && price[0] == '$') ? price.substring(1) : price;
        };
        Order.prototype.removeOne = function (prod) {
            if (prod) {
                prod.count--;
                if (prod.count == 0) {
                    var idx = this.items.indexOf(prod);
                    if (idx >= 0)
                        this.items.splice(idx, 1);
                }
            }
        };
        Order.prototype.getStateTax = function () {
            var state = (this.billingAddress.state || "").toUpperCase();
            var found = $.grep(stateTaxes, function (tax, index) { return tax.state == state; });
            return found && found.length > 0 ? found[0] : null;
        };
        return Order;
    })();
    Model.Order = Order;
    var OrderItem = (function () {
        function OrderItem(name, price, count, food) {
            this.name = name;
            this.price = price;
            this.count = count;
            this.food = food;
        }
        Object.defineProperty(OrderItem.prototype, "total", {
            get: function () {
                return this.count * this.price;
            },
            enumerable: true,
            configurable: true
        });
        return OrderItem;
    })();
    Model.OrderItem = OrderItem;
    var Address = (function () {
        function Address() {
            this.firstName = '';
            this.lastName = '';
            this.address = '';
            this.address2 = '';
            this.city = '';
            this.zip = '';
            this.state = '';
            this.email = '';
            this.phone = '';
        }
        Address.prototype.isValid = function () {
            return this.firstName && this.lastName && this.address && this.city && this.zip && this.state;
        };
        Address.prototype.isValidAll = function () {
            return this.firstName && this.lastName && this.address && this.city && this.zip && this.state && this.emailValid() && this.phoneValid();
        };
        Address.prototype.emailValid = function () {
            return validEmail(this.email);
        };
        Address.prototype.phoneValid = function () {
            return validPhone(this.phone);
        };
        return Address;
    })();
    Model.Address = Address;
    var OrderPartial = (function () {
        function OrderPartial() {
            this.id = '';
            this.created = '';
            this.total = 0;
            this.name = '';
            this.phone = '';
        }
        return OrderPartial;
    })();
    Model.OrderPartial = OrderPartial;
    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
    function validPhone(phone) {
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(phone);
    }
})(Model || (Model = {}));
