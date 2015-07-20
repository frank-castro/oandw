angular.module('storeProducts')

.directive("bttnsLeft", function() {
	return {
		restrict: "E",
		templateUrl: "templates/directives/bttns-left.html"
	};
});