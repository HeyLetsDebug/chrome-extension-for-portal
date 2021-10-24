var anchors = document.querySelectorAll('a[href^="#"]');
var getaccordion = document.querySelectorAll('.accordion-head a');
var tabHeader = document.querySelectorAll('a[role="tab"]');
var getWebshopButton = document.querySelectorAll('a.btn-cart');
	for(var i = 0; i< anchors.length; i++){
			anchors[i].setAttribute("style", "border: 5px solid #f44336 !important");
	}
	var anchorsimg = document.querySelectorAll('img[src^="#"]');
	for(var j = 0; j< anchorsimg.length; j++){
			anchorsimg[i].setAttribute("style", "border: 5px solid #f44336 !important");
	}
	for(var k = 0; k< getaccordion.length; k++){
			getaccordion[k].removeAttribute("style");
	}
	for(var l = 0; l< getWebshopButton.length; l++){
			getWebshopButton[l].removeAttribute("style");
	}
	for(var l = 0; l< tabHeader.length; l++){
			tabHeader[l].removeAttribute("style");
	}
