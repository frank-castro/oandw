(function (window, angular) {

	// angular.module('storeProducts')
	angular.module('oandwApp')

		// $scope and $http after bracket protects this function from issues with minification, the bracket close at the bottom

	.controller('varietalList', ['$scope', '$http', '$timeout', 'orderService', function ($scope, $http, $timeout, orderService) {
		var list = this;
		list.product = []; //empty array so you don't get an error when the page initially loads
		$http.get('json/varietal.json').success(function(data) {
			$scope.product = data;
		});

	   //cart functionality
		$scope.add = function (prod, vol, price) {
		    orderService.add(prod, vol, price);
		}

		$scope.remove = function (prod) {
		    orderService.remove(prod);
		}

		$scope.getTotal = function () {
		    return orderService.order.total;
		}

		$scope.carItems = function () {
		    return orderService.order.items;
		}

		$scope.submit = function () {
		    return orderService.submit();
		}
	}]);

}) (window, window.angular);