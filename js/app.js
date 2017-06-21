$(document).ready(function() {

// ====
// DATA
// ====

// apples contains what the gold standard is, possibly a tip, whether it continues to ripen after being picked, an image, possibly a video,
// a description of health benefits linked to a health site, and a list of the months it's in season
var fruitData = {
  'apples': {
    	gold: 'firm, no signs of decay or bruising, smooth skin.',
		tip: 'The variety "Honeycrisp" is an especially delicious apple.',
		ripens: 'Yes',
		img: 'images/apple.jpg',
		vid: '',
		healthLink: "http://www.medicalnewstoday.com/articles/267290.php",
		healthDescription: 'may reduce inflammation, improve neurological health, and lower cholesterol',
  		seasonMonths: [0,1,2,7,8,9,10,11]
  },
	'apricots': {
		gold: 'orange-gold color with hints of redness, smooth skin, around the size of a golf ball, yields to gentle pressure.',
		tip: 'If a little unripe, store in a paper bag to trap the ethylene gas (which is what helps induce the ripening).',
		ripens: 'Yes',
		img: 'images/apricot.jpg',
		vid: '',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=3",
		healthDescription: 'may reduce inflammation, protect eyesight, lower blood pressure, and support digestive health',
		seasonMonths: [2,3,4,5,6,7]
	},
	'blackberries': {
		gold: 'deeply colored with no hull attached (a sign of premature picking), plump and firm, no mold or stains.',
		tip: 'Remove smashed berries, which will cause others to go bad faster. Taste one if possible.',
		ripens: 'No',
		img: 'images/blackberry.jpg',
		vid: '',
		healthLink: "https://www.organicfacts.net/health-benefits/fruit/blackberries.html",
		healthDescription: 'may help with digestion, strengthen the immune system, enhance memory, and be beneficial during pregnancy',
		seasonMonths: [4,5,6]
	},
	'blueberries': {
		gold: 'a slight frosty-white hue, dry and plump, no mold or stains.',
		tip: 'Remove smashed berries, which will cause others to go bad faster. Taste one if possible.',
		ripens: 'No',
		img: 'images/blueberry.jpg',
		vid: '',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=8",
		healthDescription: 'may improve memory, prevent neurodegenerative diseases, prevent cancer, reduce blood pressure, and reduce inflammation',
		seasonMonths: [4,5,6]
	},
	'cantaloupe': {
		gold: 'little to no defects, the rind underneath the net-like texture is golden or orange in color, heavy for its size.',
		tip: 'Push on the round section where the vine was attached - it should be slightly soft and should smell fresh and fragrant with a hint of sweetness.',
		ripens: 'Yes',
		img: 'images/cantaloupe.jpg',
		vid: 'https://www.youtube.com/watch?v=gpJOV4EzObg',
		healthLink: "http://www.medicalnewstoday.com/articles/279176.php",
		healthDescription: 'may aid in eye health, reduce risk of asthma, prevent dehydration, and help maintain optimal skin and hair',
		seasonMonths: [4,5,6,9,10]
	},
	'cherries': {
		gold: '</br>Sweet red cherries: deep colored, plump, if the stem is intact it’s bright green. </br></br> Rainier cherries: reddish-yellow, red or pink blush or brown flecks (which are indicators of sun exposure – sugar accumulation), naturally less firm than red cherries.',
		tip: '	Taste one if possible.',
		ripens: 'No',
		img: 'images/rainiercherry.jpg',
		vid: '',
		healthLink: "http://www.medicaldaily.com/cherry-health-benefits-6-reasons-why-you-should-eat-more-cherries-246713",
		healthDescription: 'may help with arthritis and inflammatory conditions, lower blood sugar in diabetics, prevent heart disease, and aid in sleep',
		seasonMonths: [5,6]
	},
	'clementines': {
		gold: 'strong citrus smell, moist, supple skin, heavy for its size.',
		tip: '',
		ripens: 'No',
		img: 'images/clementine.jpg',
		vid: '',
		healthLink: "https://www.organicfacts.net/health-benefits/fruit/clementines.html",
		healthDescription: 'may relieve digestive troubles, strengthen immune system, and help maintain optimum balance of electrolytes',
		seasonMonths: [0,1,10,11]
	},
	'grapefruit': {
		gold: 'heavy for its size, yields to gentle pressure, fairly smooth, thin rind, slightly reddish in color.',
		tip: '',
		ripens: 'No',
		img: 'images/grapefruit.jpg',
		vid: 'https://www.youtube.com/watch?v=1tbf9fGAC10',
		healthLink: "http://www.medicalnewstoday.com/articles/280882.php",
		healthDescription: 'may help with weight loss, improve insulin resistance, prevent stroke, and prevent kidney stones',
		seasonMonths: [0,1,2,3,9,10,11]
	},
	'grapes': {
		gold: 'firm, plump, and firmly attached to the stems. Stems are green and flexible (not dry and brittle).  Might have a powdery-white coating (an edible, naturally occurring substance that protects grapes from moisture loss and decay).',
		tip: 'Watch out for wet, moldy, or shriveled grapes as these signs indicate decay. Taste one if possible.',
		ripens: 'No',
		img: 'images/grape.jpg',
		vid: '',
		healthLink: "http://www.medicalnewstoday.com/articles/271156.php",
		healthDescription: 'may help relieve constipation, help clear up acne, alleviate symptoms of allergies, and alleviate symptoms of menopause',
		seasonMonths: [5,6,7,8,9,10]
	},
	'honeydew': {
		gold: 'little to no defects, pale yellow to light lemon in color, not overly green, a dull looking appearance (a shiny outside is an indicator of an under-ripe melon), heavy for its size.',
		tip: 'Push on the round section where the vine was attached - it should be slightly soft and should smell fresh and fragrant with a hint of sweetness.',
		ripens: 'Yes',
		img: 'images/honeydew.jpg',
		vid: 'https://www.youtube.com/watch?v=gpJOV4EzObg',
		healthLink: "http://doctormurray.com/healing-facts-honeydew-melons/",
		healthDescription: 'may lower blood pressure, promote healthy skin, and prevent dehydration',
		seasonMonths: [4,5,6,9,10]
	},
	'kiwi': {
		gold: 'plump, fragrant, yields to gentle pressure, skin is brown and fuzzy.',
		tip: 'Watch out for bruises, dark spots, mold, or wrinkles (signs that the fruit is overripe). Size doesn’t matter.',
		ripens: 'Yes',
		img: 'images/kiwi.jpg',
		vid: 'https://www.youtube.com/watch?v=i4zq-OidaU4',
    	healthLink: "http://www.whfoods.com/genpage.php?dbid=41&tname=foodspice",
    	healthDescription: 'may prevent inflammation and cancer, boost the immune system, promote colon health, and protect against asthma',
    	seasonMonths: [0,1,5,6,7,11]
	},
	'mangos': {
		gold: 'yields to gentle pressure, similar feel to a ripe avocado, fruity aroma around the stem.',
		tip: 'Don’t worry about color.',
		ripens: 'Yes',
		img: 'images/mango.jpg',
		vid: 'https://www.youtube.com/watch?v=0OsP1icacOY',
		healthLink: "http://www.medicalnewstoday.com/articles/275921.php",
		healthDescription: 'may boost immune system, prevent prostate cancer, strengthen bones, and promote skin and hair health',
		seasonMonths: [0,1,2,3,4,5,6,7,8,9,10,11]
	},
	'oranges': {
		gold: 'heavier than it appears, yields to gentle pressure, fairly smooth, thin rind.',
		tip: 'Watch out for mold.',
		ripens: 'No',
		img: 'images/orange.jpg',
		vid: '',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=37",
		healthDescription: 'may support immune system, lower cholesterol, aid in digestion, prevent kidney stones, prevent ulcers, reduce risk of stomach cancer, and prevent rheumatoid arthritis',
		seasonMonths: [0,1,2,3,9,10,11]
	},
	'peaches': {
		gold: 'vibrant tones and colors (no green), yields to gentle pressure.',
		tip: 'Fragrance isn’t the best indication. Try to buy local peaches (peaches don’t hold up well when moved around, so they’re often picked before they’re ripe for exporting).',
		ripens: 'Yes',
		img: 'images/peach.jpg',
		vid: '',
		healthLink: "http://www.medicalnewstoday.com/articles/274620.php",
		healthDescription: 'may promote heart and eye and skin health, prevent cancer, and prevent obesity',
		seasonMonths: [6,7]
	},
	'pears': {
		gold: 'yields to gentle pressure only at the top of the pear just where the stem joins the fruit.',
		tip: '',
		ripens: 'Yes',
		img: 'images/pear.jpg',
		vid: '',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=28",
		healthDescription: 'may reduce inflammation and oxidization, help treat diverticulitis, aid in weight loss, help with detox, and improve insulin resistance',
		seasonMonths: [8,9,10]
	},
	'pineapple': {
		gold: 'the bottom of the fruit smells sweet, yellow-golden color, yields to gentle pressure.',
		tip: '',
		ripens: 'No',
		img: 'images/pineapple.jpg',
		vid: 'https://www.youtube.com/watch?v=IH7nfHbfHBY',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=34",
		healthDescription: 'may reduce inflammation, aid in digestion, promote eye health, boost energy, and support the immmune system',
		seasonMonths: [0,1,2,3,4,5,6,7,8,9,10,11]
	},
	'pomegranates': {
		gold: 'heavy for its size, flattened, angular sides, smooth soft skin – soft enough to scratch.',
		tip: '',
		ripens: 'No',
		img: 'images/pomegranate.jpg',
		vid: 'https://www.youtube.com/watch?v=ZDIxKjwx9w4',
		healthLink: "http://www.medicaldaily.com/pomegranate-health-benefits-fruit-helps-protect-against-plaque-hunger-and-certain-340020",
		healthDescription: 'may protect against kidney diseases, help curb hunger, prevent Alzheimer' + "'" + 's, protect against plaque, and defend against cancer',
		seasonMonths: [9,10,11]
	},
	'raspberries': {
		gold: 'brightly colored.',
		tip: 'Remove smashed berries, which will cause others to go bad faster. Taste one if possible.',
		ripens: 'No',
		img: 'images/raspberry.jpg',
		vid: '',
		healthLink: "http://www.whfoods.com/genpage.php?tname=foodspice&dbid=39",
		healthDescription: 'may help prevent inflammation, and decrease risk of obesity, type 2 diabetes, and cancer',
		seasonMonths: [4,5,6,7]
	},
	'strawberries': {
		gold: 'clean, dry, plump, firm, and fully red, green caps.	',
		tip: 'Avoid bruised or wrinkled berries. Taste one if possible.',
		ripens: 'No',
		img: 'images/strawberry.jpg',
		vid: '',
		healthLink: "http://www.medicalnewstoday.com/articles/271285.php",
		healthDescription: 'may help prevent heart disease, stroke, depression, constipation, high blood pressure, and cancer',
		seasonMonths: [3,4,5]
	},
	'watermelon': {
		gold: 'heavy for its size, yellow field spot, dull looking appearance (a shiny outside is an indicator of an under-ripe melon).',
		tip: 'Tap the melon with the palm of your hand: if it makes a hollow sound, it’s likely good.',
		ripens: 'No',
		img: 'images/watermelon.jpg',
		vid: 'https://www.youtube.com/watch?v=80BZGvnNZOc',
		healthLink: "http://www.medicalnewstoday.com/articles/266886.php",
		healthDescription: 'may help promote blood flow and digestion, relax muscles, prevent obesity and dehydration and muscle soreness',
		seasonMonths: [4,5,6,7]
	}
};

// background color for each month
var monthColors = {
	January: '#76D4D4',
	February: '#FF8D72',
	March: '#2ecc71',
	April: '#e74c3c',
	May: '#f1c40f',
	June: '#3498db',
	July: '#c0392b',
	August: '#009440',
	September: '#1D5E7C',
	October: '#f39c12',
	November: '#A75D00',
	December: '#2c3e50'
}

// ========= 
// VARIABLES
// =========

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// num between 0 and 11
var monthNum = d.getMonth();
var month = months[monthNum];

var fruits = ["apples", "apricots", "blackberries", "blueberries", "cantaloupe", "cherries", "clementines", "grapefruit", "grapes", "honeydew", "kiwi", "mangos", "oranges", "peaches", "pears", "pineapple", "pomegranates", "raspberries", "strawberries", "watermelon"];
var numberOfFruits = fruits.length;
var currentMonthFruits = filterFruitList();

// ==========
//  FUNCTIONS
// ==========

function formatDate(){
	var monthAndYear = month + '</br>' + d.getFullYear();
	$('#date').html(monthAndYear);
}

function changeBackgroundColor(){
	document.body.style.backgroundColor = monthColors[month];
}

// returns fruit that are in season based on the current month
function filterFruitList(){
	return fruits.filter(function(fruit) {
		// only include fruit that have monthNum included in their seasonMonths
		return fruitData[fruit]['seasonMonths'].indexOf(monthNum) !== -1;
	});
}

// returns the months that the provided fruit is in season
// takes in a fruit (type: string)
// returns a string like 'May, June, July'
function monthsInSeason(fruit){
	var arr = [];

	fruitData[fruit].seasonMonths.forEach(function(num){
		arr.push(months[num]);
	});

	return arr.join(', ');
}

// renders the fruit list with all the hidden data
function renderFruitList(){
	$('#fruits').empty();  
    
    currentMonthFruits.forEach(function(fruit, i, originalArray){

    	// append an li with a hidden div
    	$('#fruits').append('<li id="' + i + '">' + fruit + ' <span>▾</span><div class="data" style="display: none"></div></li>');
    	
    	var currentFruit = $('#' + i + ' div');

    	// build the strings for the div
    	var image = '<img src="' + fruitData[fruit].img + '" alt="a picture of ' + fruit + '.">';
    	var gold = '<p><strong>The Gold Standard:</strong> ' + fruitData[fruit].gold + '</p>';
    	var tip = '<p><strong>Tip:</strong> ' + fruitData[fruit].tip + '</p>';
    	var ripens = '<p><strong>Ripens after picked?</strong> ' + fruitData[fruit].ripens + '</p>';
    	var whenInSeason = '<p><strong>Months in season: </strong>' + monthsInSeason(fruit) + '</p>';
    	var vid = '<p><strong>How to Prepare: </strong>Click <a href="' + fruitData[fruit].vid + '" target="_blank">HERE</a> to watch a video</p>';
    	var reasons = '<p><strong>Reasons to eat more ' + fruit + ': </strong> <a href="' + fruitData[fruit].healthLink + '" target="_blank">' + fruitData[fruit].healthDescription + '</a> (click link for more info)';

    	// append the strings
    	currentFruit.append(image)
		    		.append(gold);

		if (fruitData[fruit].tip) {
			currentFruit.append(tip);
		}

		currentFruit.append(ripens)
		       		.append(whenInSeason);
		       
		if (fruitData[fruit].vid) {
			currentFruit.append(vid);
		}

		currentFruit.append(reasons);
    
    });
}

// handle click events for each fruit (toggle and scroll)
function toggleFruit(){
    $("ul").off();
    $("ul").on('click', 'li', function(e) {
      $(this).children('div').slideToggle('slow');
      $(this).siblings().slideToggle('slow');
      $('html, body').animate({
        scrollTop: $('li').first().offset().top
      }, 'slow');
    });
}

// handle if months change (basically run init again after updating month, monthNum, and currentMonthFruits)
function changeMonth() {
	$('.nav').on('click', 'div', function(e) {
		month = e.target.innerHTML;
		monthNum = months.indexOf(month);
		currentMonthFruits = filterFruitList();
		formatDate();
		changeBackgroundColor();
		renderFruitList();
	});
}

function init(){
	formatDate();
	changeBackgroundColor();
	renderFruitList();
	toggleFruit();
	changeMonth();
}
	
init();

});