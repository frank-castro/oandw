angular.module('oandwApp')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'templates/home/index.html',
		controller: 'homeContent'
	}).
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
	when('/seasonings', {
		templateUrl: 'templates/seasonings/index.html',
		controller: 'seasoningsList'
	}).
	when('/gifts', {
		templateUrl: 'templates/gifts/index.html',
		controller: 'giftsList'
	}).
	when('/accessories', {
		templateUrl: 'templates/accessories/index.html',
		controller: 'accessorList'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);