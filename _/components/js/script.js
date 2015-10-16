$('.barsWrapper').on('click', function(){
	$('.sitemenu').toggleClass('hidden visible');
});

$('.navwrapper a').on('click', function(){
	$('.sitemenu').toggleClass('hidden visible');
});

$('.about').on('click', function(){
	$('.aboutUs').removeClass('closed');
});

$('.closeBttn').on('click', function(){
	$('.aboutUs').addClass('closed');
});

$('.shopping_cart').on('click', function(){
	$('.cartBanner').toggleClass('cartBttn');
	$('.cartBannerContent').toggleClass('hidden');
});

$(window).scroll(function(){
  var windowHeight = $(this).height();
  var topOfWindow = $(this).scrollTop();

	// if (topOfWindow > 300) {
	// 	$('.aboutUs').addClass('closed');
	// }
  
  $('.submenu').each(function() {
    var elemPosit = $(this).offset().top;

    if (elemPosit < topOfWindow + windowHeight) {
      $(this).removeClass("hidden");
    } else {
      $(this).addClass("hidden");
    }
    
  });
});