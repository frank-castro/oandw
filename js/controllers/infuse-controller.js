angular.module('storeProducts')

.controller('infuseList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = [];
	$http.get('json/infuse.json').success(function(data) {
		$scope.product = data;
	});
}]);