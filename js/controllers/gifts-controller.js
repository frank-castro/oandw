angular.module('storeProducts')

	// $scope and $http after bracket protects this function from issues with minification, the bracket close at the bottom

.controller('giftsList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = []; //empty array so you don't get an error when the page initially loads
	$http.get('json/gifts.json').success(function(data) {
		$scope.product = data;
	});	
}]);