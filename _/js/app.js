var oandwApp = angular.module('oandwApp', [
		'ngRoute',
		'productControllers'
	]);

oandwApp.config(['$routeProvider', function($routeProvider) {
			$routeProvider.
			when('/varietal', {
				templateUrl: 'partials/varietal.html',
				controller: 'Varietallist'
			}).
			when('/specialty', {
				templateUrl: 'partials/specialty.html',
				controller: 'Specialtyoillist'
			}).
			otherwise({
				redirectTo: '/singleVarietal'
			});
		}
	]);