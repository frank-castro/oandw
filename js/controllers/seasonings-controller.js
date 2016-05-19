angular.module('storeProducts')

.controller('seasoningsList', ['$scope', '$http', 'orderService', function($scope, $http, orderService) {
	var list = this;
	list.product = [];
	$http.get('json/seasonings.json').success(function(data) {
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