angular.module('storeProducts')

.directive("bigBottle", function() {
	return {
		restrict: "E",
		templateUrl: "templates/directives/big-bottle.html"
	};
});