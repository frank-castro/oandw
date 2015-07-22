angular.module('storeProducts')

.directive("giftsContainer", function() {
	return {
		template: '<ng-include src="getTemplateUrl()"/>',
		restrict: "E",
		controller: function($scope) {
			$scope.getTemplateUrl = function() {
				if ($scope.item.type == "twobottles")
					return "templates/directives/gifts-twobottles.html";
				if ($scope.item.type == "fivebottles")
					return "templates/directives/gifts-fivebottles.html";
				if ($scope.item.type == "threebottles")
					return "templates/directives/gifts-threebottles.html";
				if ($scope.item.type == "sampler")
					return "templates/directives/gifts-sampler.html";
			}
		}
	};
});