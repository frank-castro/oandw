angular.module('storeProducts')

	// $scope and $http after bracket protects this function from issues with minification, the bracket close at the end

.controller('giftsList', ['$scope', '$http', 'orderService', function($scope, $http, orderService) {
	var list = this;
	list.product = []; //empty array so you don't get an error when the page initially loads
	$http.get('json/gifts.json').success(function(data) {
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