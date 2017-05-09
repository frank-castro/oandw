angular.module('oandwApp')

.directive("balsamicContainer", function() {
	return {
		template: '<ng-include src="getTemplateUrl()"/>',
		restrict: "E",
		controller: function($scope) {
			$scope.getTemplateUrl = function() {
				if ($scope.item.type == "normalbottle")
					return "templates/directives/normal-bottle.html";
				if ($scope.item.type == "specialbottle")
					return "templates/directives/200mlbottle.html";
			}
		}
	};
});