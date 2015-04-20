var productInfo = angular.module('productControllers', []);

// $scope and $http protect this function from issues with minification, the bracket close at the bottom
productInfo.controller('Oliveoillist', ['$scope', '$http', function($scope) {
	$scope.product = [
		{
			'name' : 'Arbosana Organic Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Organic Arbosana has fruitiness, nutty tones, and medium pungency. Tasting notes include green tomato and almond. Lovely, sweet ,fruity aroma. Drizzle over greens, sauté vegetables, or grill your favorite fish.'
		},
		{
			'name' : 'Basil Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Enjoy the sweet basil flavor that comes through this delicious Tunisian oil made by crushing basil leaves at pressing. Delicious with pasta, salad greens, dipping bread and as a drizzle in sauces.'
		},
		{
			'name' : 'Blood Orange Olive Oil ',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Intensely flavorful, but hard to come by out of season, blood oranges area favorite citrus fruit. Our Tunisian oil captures their full, almost savory taste by crushing just-picked oranges with just-picked olives. The oils flavor and fragrance are magnificent. Mix with spinach for a light salad, rub on your favorite poultry or use as a base for a citrus mayonnaise. Pair with Tangerine Balsamic for an amazing poultry rub. WOW!'
		},
		{
			'name' : 'Buttery Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'This olive oil has an acidity of less than 0.1%. It is incredibly mild! Use in baking to replace butter, make your mashed potatoes or drizzle over greens, sauté vegetables and grill your favorite fish or meat. It is delicious on popcorn!'
		},
		{
			'name' : 'Garlic Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'The perfect Tunisian grilling and sautéing oil. Toss it with pasta; use it in place of butter to make garlic bread; drizzle on steaks, soups and vegetables as a finishing oil; mix with our herbs and dip your bread.'
		},
		{
			'name' : 'Gremolata Extra Virgin Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Gremolata is a traditional Italian herb condiment consisting of fresh lemon zest, minced garlic, Italian flat leaf parsley and a hint of mint. The herbs and citrus zest are typically crushed together in a mortar to release their pungent essential oils. Try finishing your fish with this exciting flavor combination. It is also traditionally served with osso buco, veal and other slow braised dishes to add a zip of flavor. We also recommend our Gremolata Olive Oil for marinating poultry, in dressings, and pairing with our Alfoos Mango or Traditional Balsamic Vinegar.'
		},
		{
			'name' : 'Herbes de Provence Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'With notes of savory, thyme, basil, lavender & a hint of fennel, this all-natural extra-virgin olive oil is a show stopper! Drizzle it over grilled meat or fish, use it for a dipping oil or create your favorite salad dressing. This is one that should be in every chef’s kitchen. Pair with our Lavender Balsamic.'
		}
	]
}]);

productInfo.controller('Specialtyoillist', ['$scope', '$http', function($scope) {
	$scope.product = [
		{
			'name' : 'Other Organic Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Organic Arbosana has fruitiness, nutty tones, and medium pungency. Tasting notes include green tomato and almond. Lovely, sweet ,fruity aroma. Drizzle over greens, sauté vegetables, or grill your favorite fish.'
		},
		{
			'name' : 'Basil Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Enjoy the sweet basil flavor that comes through this delicious Tunisian oil made by crushing basil leaves at pressing. Delicious with pasta, salad greens, dipping bread and as a drizzle in sauces.'
		},
		{
			'name' : 'Blood Orange Olive Oil ',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Intensely flavorful, but hard to come by out of season, blood oranges area favorite citrus fruit. Our Tunisian oil captures their full, almost savory taste by crushing just-picked oranges with just-picked olives. The oils flavor and fragrance are magnificent. Mix with spinach for a light salad, rub on your favorite poultry or use as a base for a citrus mayonnaise. Pair with Tangerine Balsamic for an amazing poultry rub. WOW!'
		},
		{
			'name' : 'Buttery Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'This olive oil has an acidity of less than 0.1%. It is incredibly mild! Use in baking to replace butter, make your mashed potatoes or drizzle over greens, sauté vegetables and grill your favorite fish or meat. It is delicious on popcorn!'
		},
		{
			'name' : 'Garlic Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'The perfect Tunisian grilling and sautéing oil. Toss it with pasta; use it in place of butter to make garlic bread; drizzle on steaks, soups and vegetables as a finishing oil; mix with our herbs and dip your bread.'
		},
		{
			'name' : 'Gremolata Extra Virgin Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'Gremolata is a traditional Italian herb condiment consisting of fresh lemon zest, minced garlic, Italian flat leaf parsley and a hint of mint. The herbs and citrus zest are typically crushed together in a mortar to release their pungent essential oils. Try finishing your fish with this exciting flavor combination. It is also traditionally served with osso buco, veal and other slow braised dishes to add a zip of flavor. We also recommend our Gremolata Olive Oil for marinating poultry, in dressings, and pairing with our Alfoos Mango or Traditional Balsamic Vinegar.'
		},
		{
			'name' : 'Herbes de Provence Olive Oil',
			'pricebig' : '$32.95',
			'pricesmall' : '$17.95',
			'description' : 'With notes of savory, thyme, basil, lavender & a hint of fennel, this all-natural extra-virgin olive oil is a show stopper! Drizzle it over grilled meat or fish, use it for a dipping oil or create your favorite salad dressing. This is one that should be in every chef’s kitchen. Pair with our Lavender Balsamic.'
		}
	]
}]);