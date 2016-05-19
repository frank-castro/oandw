angular.module('storeProducts')

.controller('accessorList', ['$scope', '$http', 'orderService', function($scope, $http, orderService) {
	var list = this;
	list.product = []; //empty array so you don't get an error when the page initially loads
	$http.get('json/accessories.json').success(function(data) {
		$scope.product = data;
	});

    //cart functionality

	$scope.add = function (prod, price) {
	    orderService.addItem(prod, price);
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