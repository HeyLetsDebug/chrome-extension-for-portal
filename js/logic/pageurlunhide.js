var countryNameRaw = document.documentElement.lang;
var str = countryNameRaw.replace(/-/g, '_');
var str2 = "article-teaser-image-src";
var imgSourceString;
var imageLinks = document.querySelectorAll('#content .layout-inner .main-body img');

var MTBody = document.getElementsByTagName('body')[0];
if(MTBody.classList.contains('modern-template'))
{
	        		
	for (var i = 0; i < imageLinks.length; i++) {
	    if (imageLinks[i].getAttribute("src")) {
	        imgSourceString = imageLinks[i].src.toString();
	        if (!imgSourceString.includes(str2)) {
	            if (!imgSourceString.includes(str)) {
	                imageLinks[i].setAttribute("style", "border: 5px solid #9c27b0c7 !important");
	            }
	        }
	    } else {
	        imgSourceString = imageLinks[i].getAttribute("data-src")
	        if (!imgSourceString.includes(str)) {
	            imageLinks[i].setAttribute("style", "border: 5px solid #9c27b0c7 !important");
	        }
	    }
	}	
}	
else
{
	for(var i = 0; i< imageLinks.length; i++){
	  if (!imgSourceString.includes(str)) {
	      imageLinks[i].setAttribute("style", "border: 5px solid #9c27b0c7 !important");
	    }
	}
}
var hrefLinks = document.querySelectorAll('#content .layout-inner .main-body a');

for (var i = 0; i < hrefLinks.length; i++) {
    if (hrefLinks[i].href.indexOf(str) === -1 && hrefLinks[i].href.indexOf(countryNameRaw) > -1) {
        hrefLinks[i].setAttribute("style", "border: 5px solid #9c27b0c7 !important");
    }
}