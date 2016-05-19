"use strict";
var Controllers;
(function (Controllers) {
    var OrderController = (function () {
        function OrderController($scope, $timeout, orderService) {
            var _this = this;
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.orderService = orderService;
            // wizard step
            this.step = 1;
            this.shippingOptions = [
                { value: 0, name: 'Standard Shipping' },
                { value: 1, name: '3rd Business Day (Additional $30)' },
                { value: 2, name: '2nd Business Day Air (Additional $40)' }
            ];
            this.usStates = [
                { value: "", name: "Select State" },
                { value: "AL", name: "Alabama" },
                { value: "AK", name: "Alaska" },
                { value: "AZ", name: "Arizona" },
                { value: "AR", name: "Arkansas" },
                { value: "CA", name: "California" },
                { value: "CO", name: "Colorado" },
                { value: "CT", name: "Connecticut" },
                { value: "DE", name: "Delaware" },
                { value: "DC", name: "District Of Columbia" },
                { value: "FL", name: "Florida" },
                { value: "GA", name: "Georgia" },
                { value: "HI", name: "Hawaii" },
                { value: "ID", name: "Idaho" },
                { value: "IL", name: "Illinois" },
                { value: "IN", name: "Indiana" },
                { value: "IA", name: "Iowa" },
                { value: "KS", name: "Kansas" },
                { value: "KY", name: "Kentucky" },
                { value: "LA", name: "Louisiana" },
                { value: "ME", name: "Maine" },
                { value: "MD", name: "Maryland" },
                { value: "MA", name: "Massachusetts" },
                { value: "MI", name: "Michigan" },
                { value: "MN", name: "Minnesota" },
                { value: "MS", name: "Mississippi" },
                { value: "MO", name: "Missouri" },
                { value: "MT", name: "Montana" },
                { value: "NE", name: "Nebraska" },
                { value: "NV", name: "Nevada" },
                { value: "NH", name: "New Hampshire" },
                { value: "NJ", name: "New Jersey" },
                { value: "NM", name: "New Mexico" },
                { value: "NY", name: "New York" },
                { value: "NC", name: "North Carolina" },
                { value: "ND", name: "North Dakota" },
                { value: "OH", name: "Ohio" },
                { value: "OK", name: "Oklahoma" },
                { value: "OR", name: "Oregon" },
                { value: "PA", name: "Pennsylvania" },
                { value: "RI", name: "Rhode Island" },
                { value: "SC", name: "South Carolina" },
                { value: "SD", name: "South Dakota" },
                { value: "TN", name: "Tennessee" },
                { value: "TX", name: "Texas" },
                { value: "UT", name: "Utah" },
                { value: "VT", name: "Vermont" },
                { value: "VA", name: "Virginia" },
                { value: "WA", name: "Washington" },
                { value: "WV", name: "West Virginia" },
                { value: "WI", name: "Wisconsin" },
                { value: "WY", name: "Wyoming" },];
            //#region Cart
            this.recentlyChanged = false;
            this.maximized = false;
            this.submitting = false;
            $scope.$watch(function () { return _this.itemCount; }, function () { return _this.triggerChange(); });
        }
        Object.defineProperty(OrderController.prototype, "order", {
            // order accessor
            get: function () {
                return this.orderService.order;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "shippingOption", {
            get: function () {
                var idx = this.order.shippingType || 0;
                return this.shippingOptions[idx];
            },
            set: function (option) {
                this.order.shippingType = option.value || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "shippingTypeLabel", {
            get: function () {
                var idx = this.order.shippingType || 0;
                return this.shippingOptions[idx].name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "billingState", {
            get: function () {
                return this.getState(this.order.billingAddress.state);
            },
            set: function (value) {
                this.order.billingAddress.state = value.value || "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "shippingState", {
            get: function () {
                return this.getState(this.order.shippingAddress.state);
            },
            set: function (value) {
                this.order.shippingAddress.state = value.value || "";
            },
            enumerable: true,
            configurable: true
        });
        OrderController.prototype.getState = function (state) {
            state = (state || "").toUpperCase();
            var found = $.grep(this.usStates, function (obj, index) { return obj.value == state; });
            return found && found.length > 0 ? found[0] : this.usStates[0];
        };
        OrderController.prototype.toggle = function () {
            this.maximized = !this.maximized;
        };
        Object.defineProperty(OrderController.prototype, "subTotal", {
            get: function () {
                return this.order.subTotal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "shippingPrice", {
            get: function () {
                return this.order.shippingPrice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "totalTax", {
            get: function () {
                return this.order.totalTax;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "total", {
            get: function () {
                return this.order.total;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "items", {
            get: function () {
                return this.order.items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "itemCount", {
            get: function () {
                return this.order.itemCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderController.prototype, "hasItems", {
            get: function () {
                return this.itemCount > 0;
            },
            enumerable: true,
            configurable: true
        });
        OrderController.prototype.add = function (prodId) {
            return this.order.addById(prodId);
        };
        OrderController.prototype.remove = function (prodId) {
            return this.order.removeById(prodId);
        };
        OrderController.prototype.submit = function () {
            var _this = this;
            this.submitting = true;
            this.orderService.submit().then(function () { return _this.step = 4; }, function () { return _this.step = 5; }).finally(function () { return _this.submitting = false; });
        };
        OrderController.prototype.hideCart = function () {
            $('.cartBanner').toggleClass('cartBttn');
            $('.cartBannerContent').toggleClass('hidden');
            this.step = 1;
        };
        OrderController.prototype.triggerChange = function () {
            var self = this;
            this.recentlyChanged = true;
            this.$timeout(function () { self.recentlyChanged = false; }, 600);
        };
        return OrderController;
    })();
    Controllers.OrderController = OrderController;
    angular.module('oandwApp').controller('orderController', ['$scope', '$timeout', 'orderService',
        function ($scope, $timeout, orderService) { return new OrderController($scope, $timeout, orderService); }]);
})(Controllers || (Controllers = {}));
