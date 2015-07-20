angular.module('storeProducts')

.controller('specialtyList', ['$scope', '$http', function($scope, $http) {
	var list = this;
	list.product = [];
	$http.get('json/specialty.json').success(function(data) {
		$scope.product = data;
	});
}]);