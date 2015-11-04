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
            //#region Cart
            this.recentlyChanged = false;
            this.maximized = false;
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
            this.orderService.submit();
        };
        OrderController.prototype.triggerChange = function () {
            var self = this;
            this.recentlyChanged = true;
            this.$timeout(function () { self.recentlyChanged = false; }, 600);
        };
        return OrderController;
    })();
    Controllers.OrderController = OrderController;
    angular.module('storeProducts').controller('orderController', ['$scope', '$timeout', 'orderService',
        function ($scope, $timeout, orderService) { return new OrderController($scope, $timeout, orderService); }]);
})(Controllers || (Controllers = {}));
