/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
"use strict";
var Services;
(function (Services) {
    var OrderService = (function () {
        function OrderService($http) {
            this.$http = $http;
            // >> temporal global flag
            this.splashOn = true;
            this._order = new Model.Order();
        }
        Object.defineProperty(OrderService.prototype, "order", {
            get: function () {
                return this._order;
            },
            enumerable: true,
            configurable: true
        });
        OrderService.prototype.add = function (name, vol, price) {
            return this.order.add(name, vol, price);
        };
        OrderService.prototype.addItem = function (name, price) {
            return this.order.addItem(name, price);
        };
        OrderService.prototype.addById = function (prodId) {
            this.order.addById(prodId);
        };
        OrderService.prototype.remove = function (name, vol) {
            this.remove(name, vol);
        };
        OrderService.prototype.submit = function () {
            var _this = this;
            var request = { order: this.order };
            return this.$http.post("/service.asmx/placeorder", request).then(function () { return _this.order.clear(); });
        };
        return OrderService;
    })();
    Services.OrderService = OrderService;
    angular.module('oandwApp').factory('orderService', ['$http', function ($http) { return new OrderService($http); }]);
})(Services || (Services = {}));
//# sourceMappingURL=orderService.js.map