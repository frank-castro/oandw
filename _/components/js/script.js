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

$('.closeBttnMenu').on('click', function(){
	$('.sitemenu').toggleClass('hidden visible');
});

$('.shopping_cart, #keepShopping').on('click', function(){
	$('.cartBanner').toggleClass('cartBttn');
	$('.cartBannerContent').toggleClass('hidden');
});

// ** old stuff you had here **

$(window).scroll(function(){
  var windowHeight = $(this).height();
  var topOfWindow = $(this).scrollTop();
  
  $('.submenu').each(function() {
    var elemPosit = $(this).offset().top;

    if (elemPosit < topOfWindow + windowHeight) {
      $(this).removeClass("hidden");
    } else {
      $(this).addClass("hidden");
    }
	
  });
});



// ** new stuff starts here **

// variables to hide nav menu on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.logoBar').outerHeight();

$(window).on('scroll', function() {

	didScroll = true;
});

// functionality to hide nav menu on scroll
setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
  }
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
  
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
  
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
	// Scroll Down
		$('.logoBar').removeClass('show').addClass('hide');
	} else {
	// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('.logoBar').removeClass('hide').addClass('show');
		}
	}

	lastScrollTop = st;

}