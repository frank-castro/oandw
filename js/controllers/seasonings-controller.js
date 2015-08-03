angular.module('storeProducts')

.controller('seasoningsList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = [];
	$http.get('json/seasonings.json').success(function(data) {
		$scope.product = data;
	});
}]);