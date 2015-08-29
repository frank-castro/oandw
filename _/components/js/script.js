$('.barsWrapper').on('click', function(){
	$('.sitemenu').toggleClass('hidden visible');
	$('.popup').addClass('closed');
});

$('.navwrapper a').on('click', function(){
	$('.sitemenu').toggleClass('hidden visible');
});

$('.infoIcon, .about').on('click', function(){
	$('.popup').toggleClass('closed opened');
	$('.sitemenu').addClass('hidden');
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('.popup').addClass('closed');
    } 
});