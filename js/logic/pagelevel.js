var anchors = document.querySelectorAll('a[href^="#"]');
var getaccordion = document.querySelectorAll('h3.accordion-head>a');
var getWebshopButton = document.querySelectorAll('a.btn-cart');
	for(var i = 0; i< anchors.length; i++){
			anchors[i].setAttribute("style", "border: 5px solid #ff00004f !important");
	}
	var anchorsimg = document.querySelectorAll('img[src^="#"]');
	for(var j = 0; j< anchorsimg.length; j++){
			anchorsimg[i].setAttribute("style", "border: 5px solid #ff00004f !important");
	}
	for(var k = 0; k< getaccordion.length; k++){
			getaccordion[k].removeAttribute("style");
	}
	for(var l = 0; l< getWebshopButton.length; l++){
			getWebshopButton[l].removeAttribute("style");
	}
