angular.module('storeProducts')

.controller('accessorList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = []; //empty array so you don't get an error when the page initially loads
	$http.get('json/accessories.json').success(function(data) {
		$scope.product = data;
	});	
}]);