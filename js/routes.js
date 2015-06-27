angular.module('oandwApp')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/varietal', {
		templateUrl: 'templates/varietal/index.html',
		controller: 'varietalList'
	}).
	when('/infuse', {
		templateUrl: 'templates/infuse/index.html',
		controller: 'infuseList'
	}).
	when('/specialty', {
		templateUrl: 'templates/specialty/index.html',
		controller: 'specialtyList'
	}).
	when('/balsamics', {
		templateUrl: 'templates/balsamics/index.html',
		controller: 'balsamicsList'
	}).
	when('/herbs', {
		templateUrl: 'templates/herbs/index.html',
		controller: 'herbsList'
	}).
	when('/gifts', {
		templateUrl: 'templates/gifts/index.html',
		controller: 'giftsList'
	}).
	otherwise({
		redirectTo: '/varietal'
	});
}]);