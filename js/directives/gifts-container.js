// angular.module('storeProducts')

// .directive("giftsContainer", function() {
// 	return {
// 		restrict: "E",
// 		templateUrl: "templates/directives/gifts-twobottles.html"
// 	};
// });

angular.module('storeProducts')

.directive("giftsContainer", function() {
	return {
		template: '<ng-include src="getTemplateUrl()"/>',
		// scope: {
		// 	item: '=data'
		// },

		restrict: "E",
		controller: function($scope) {
			$scope.getTemplateUrl = function() {
				if ($scope.item.type == "twobottles")
					return "templates/directives/gifts-twobottles.html";
				if ($scope.item.type == "fivebottles")
					return "templates/directives/gifts-fivebottles.html";
			}
		}
	};
});