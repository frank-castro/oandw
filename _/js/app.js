var oandwApp = angular.module('oandwApp', [
		'ngRoute',
		'productControllers'
	]);

oandwApp.config(['$routeProvider', function($routeProvider) {
			$routeProvider.
			when('/oliveoil', {
				templateUrl: 'partials/olive.html',
				controller: 'Oliveoillist'
			}).
			when('/specialty', {
				templateUrl: 'partials/specialty.html',
				controller: 'Specialtyoillist'
			}).
			otherwise({
				redirectTo: '/oliveoil'
			});
		}
	]);