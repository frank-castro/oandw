angular.module('storeProducts')

.controller('herbsList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = [];
	$http.get('json/herbs.json').success(function(data) {
		$scope.product = data;
	});
}]);