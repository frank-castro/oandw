angular.module('storeProducts')

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

	$scope.splashOn = orderService.splashOn;

	$scope.headerClass = function () {
	    if (orderService.splashOn) {
	        return 'header headerIntro';
	    } else {
	        return 'header';
	    }
	}

	$scope.closeSplash = function () {
	    orderService.splashOn = false;
	    $scope.splashOn = false;
	    $('.sitemenu').removeClass('sitemenuIntro');
	    $('.imgText').addClass('imgTextIntro');
	    $('.logo').removeClass('logoIntro');
	}

	$(window).scroll(function () {
	    if (orderService.splashOn) {
	        var topOfWindow = $(this).scrollTop();
	        if (topOfWindow > 70) {
	            $timeout(function () { $scope.closeSplash(); }, 100);
	        }
	    }
	});
}]);