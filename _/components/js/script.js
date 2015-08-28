$('.barsWrapper').on('click', function(){
	$('.sitemenu, .navwrapper a').toggleClass('hidden');
	return false;
});

$('.navwrapper a').on('click', function(){
	$('.sitemenu').toggleClass('hidden');
	return true;
});

$('.infoIcon, .about').on('click', function(){
	$('.popup').toggleClass('hidden');
	$('.sitemenu').toggleClass('movedown');
});