		var imageLinksmaster = document.getElementsByTagName('img');
		var findMaster = "master";

		for(var i = 0; i< imageLinksmaster.length; i++){
		  if (imageLinksmaster[i].src.indexOf(findMaster) > -1) {
		      imageLinksmaster[i].setAttribute("style", "border: 10px solid #edff004f !important");
		    }
		}

		var hrefLinksmaster = document.getElementsByTagName('a');

		for(var i = 0; i< hrefLinksmaster.length; i++){
		  if (hrefLinksmaster[i].href.indexOf(findMaster) > -1) {
		      hrefLinksmaster[i].setAttribute("style", "border: 10px solid #edff004f !important");
		    }
		}