angular
	.module('oandwApp')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {

					$(element).slick({
						speed: 900,
						autoplay: false,
						autoplaySpeed: 5000,
						dots: false,
						arrows: false,
						infinite: true,
						mobileFirst: true,
						rows: 1,
						lazyload: 'progressive'
					})

					// $(element).slick(scope.$eval(attrs.slickCarousel));

					// if(!$(element).hasClass('slick-initialized')) {
					// 	$(element).slick();
					// }
				})
			}
		};
	});