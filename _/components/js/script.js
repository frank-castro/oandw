$('.barsWrapper').on('click', function(){
  $('.sitemenu, .navwrapper a').toggleClass('hidden');
  
  return false;
});

$('.navwrapper a').on('click', function(){
  $('.sitemenu').toggleClass('hidden');
  
  return true;
});

$('.infoIcon').on('click', function(){
  $('.popup').toggleClass('hidden');
  
  return false;
});