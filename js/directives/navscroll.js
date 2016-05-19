(function() {
	'use strict';

	angular.module('oandwApp')
	.directive('navScroll', ['$window', function($window){
		return {
		restrict: 'A',
		link: function (scope, element) {
			var windowEl = angular.element($window);
			var delta = 10;
			var lastScrollTop = 0;

			windowEl.on('scroll', function () {
				var st = windowEl.scrollTop();

				if (Math.abs(lastScrollTop - st) <= delta) {
					return;
				}

				if (st > lastScrollTop)
					element.addClass('headerbg-hidden');
				else
					element.removeClass('headerbg-hidden');

				lastScrollTop = st;
				});
			}
		};
	}]);
})();