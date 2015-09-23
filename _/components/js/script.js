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

$('.shopping_cart').on('click', function(){
	$('.cartBanner').toggleClass('cartBttn');
	$('.cartBannerContent').toggleClass('hidden');
});

// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y > 300) {
//         $('.popup').addClass('closed');
//     } 
// });

$(window).scroll(function(){
  var windowHeight = $(this).height();
  var topOfWindow = $(this).scrollTop();

    if (topOfWindow > 300) {
        $('.popup').addClass('closed');
    }
  
  $('.submenu').each(function() {
    var elemPosit = $(this).offset().top;

    if (elemPosit < topOfWindow + windowHeight) {
      $(this).removeClass("hidden");
    } else {
      $(this).addClass("hidden");
    }
    
  });
});

function initMap() {
	var myLatLng = {lat: 41.8881516, lng: -87.7948077};

	// Create an array of styles.
	var styles = [
		{
			stylers: [
				{ hue: "#321A0E" },
				{ saturation: 10 },
				{ invert_lightness: true }
			]
		},{
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{ lightness: 30 },
				{ visibility: "simplified" }
			]
		},{
			featureType: "landscape.man_made",
			elementType: "geometry.fill",
			stylers: [
				{ lightness: 10 },
				{ hue: "#321A0E" }
			]
		}
	];

	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});


	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng,
		scrollwheel: false,

		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}

 	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Olive and Well!'
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

}