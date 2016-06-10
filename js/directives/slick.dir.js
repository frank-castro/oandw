angular
	.module('oandwApp')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {

					$(element).slick({
						speed: 900,
						autoplay: true,
						autoplaySpeed: 3900,
						dots: true,
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