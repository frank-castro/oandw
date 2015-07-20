angular.module('storeProducts', [])

.controller('balsamicsList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = [];
	$http.get('json/balsamics.json').success(function(data) {
		$scope.product = data;
	});
}]);