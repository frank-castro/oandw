angular.module('storeProducts', [])

.controller('balsamicsList', ['$scope', '$http', 'orderService', function($scope, $http, orderService) {
	var list = this;
	list.product = [];
	$http.get('json/balsamics.json').success(function(data) {
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

	activate();

	function activate() {
	    orderService.splashOn = false;
	    $('.sitemenu').removeClass('sitemenuIntro');
	    $('.imgText').addClass('imgTextIntro');
	    $('.logo').removeClass('logoIntro');
	}
}]);