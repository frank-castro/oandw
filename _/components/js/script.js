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