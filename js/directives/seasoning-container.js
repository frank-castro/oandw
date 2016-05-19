angular.module('oandwApp')

.directive("seasoningContainer", function() {
	return {
		template: '<ng-include src="getTemplateUrl()"/>',
		restrict: "E",
		controller: function($scope) {
			$scope.getTemplateUrl = function() {
				if ($scope.item.type == "package1")
					return "templates/directives/package1.html";
				if ($scope.item.type == "package2")
					return "templates/directives/package2.html";
				if ($scope.item.type == "jar")
					return "templates/directives/jar.html";
			}
		}
	};
});