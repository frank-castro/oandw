angular
	.module('oandwApp')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {
					$(element).slick({
						speed: 500,
						dots: true,
						arrows: false,
						infinite: false,
						mobileFirst: true,
						rows: 1,
						lazyload: 'progressive'
					});
					$(element).slick(scope.$eval(attrs.slickCarousel));
					// $(element).slick('unslick');
				});
			}
		};
	});