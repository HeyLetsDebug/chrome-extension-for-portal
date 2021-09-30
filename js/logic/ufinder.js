var modalDSM = document.getElementById("modalDSM");
var modalDSMContent = document.getElementById("modalContentArea");
var modalFooterArea = document.getElementById("modalWarningArea");
var spans = document.getElementsByClassName("closeModalDsm")[0];
spans.onclick = function() {
	modalDSM.classList.remove("modalShower");
	modalDSMContent.innerHTML = "";
	modalFooterArea.innerHTML = "";
	document.body.classList.remove("overflowHiden");
	document.documentElement.classList.remove('overflowHiden');
};
[].forEach.call(
	document.querySelectorAll('script'),
	function(el) {
		window.st = el.innerHTML;
		window.st = window.st.replace(/.*\{|\}/gi, '');
		document.body.classList.add("overflowHiden");
		document.documentElement.classList.add('overflowHiden');

		if (el.innerHTML.indexOf("utag_data") != -1) {
			if (el.innerHTML.indexOf("gsk.legacy_therapeutic_area") == -1 && el.innerHTML.indexOf("gsk.legacy_brand") == -1 && el.innerHTML.indexOf("gsk.legacy_audience") == -1 && el.innerHTML.indexOf("gsk.webpage_id") == -1)
			{
				// alert("Utag is empty !!");
				modalDSM.classList.add("modalShower");
				modalDSMContent.innerHTML = "";
				modalFooterArea.innerHTML = "";
				modalDSMContent.innerHTML = "Utag is empty !!";

			}
			else
			{
				var data = "gsk.webpage_id";
				if (el.innerHTML.indexOf(data) != -1)
				{
					window.tfCounter = "1"
					showModalWithData();

				} else {
					window.tfCounter = "0"
					showModalWithData();
					modalFooterArea.innerHTML = "<span class='warningBackdrop'>CL ID Not Available !!</span>";

				}
			}
		}
	}
);

function showModalWithData()
{
	modalDSM.classList.add("modalShower");

	modalDSMContent.innerHTML = "";

	var idea = window.st.replace(/\s+/g, '').split('"').join("").replace(/;/g, '').split(',')

	for (var i = 0; i < idea.length; i++) {
		if (idea[i].split(":")[0] == "gsk.legacy_brand") {
			var para = document.createElement("P");
			para.innerHTML = "<span class='tealiumName'>Brand Name</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
			modalDSMContent.appendChild(para);
		} else if (idea[i].split(":")[0] == "gsk.legacy_therapeutic_area") {
			var para = document.createElement("P");
			para.innerHTML = "<span class='tealiumName'>Therapeutic Area</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
			modalDSMContent.appendChild(para);
		} else if (idea[i].split(":")[0] == "gsk.legacy_audience") {
			var para = document.createElement("P");
			para.innerHTML = "<span class='tealiumName'>Audience</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
			modalDSMContent.appendChild(para);
		} else if (idea[i].split(":")[0] == "gsk.webpage_id") {
			var para = document.createElement("P");
			para.innerHTML = "<span class='tealiumName'>Utag CL ID</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
			modalDSMContent.appendChild(para);

			window.pageCLNumber = idea[i].split(":")[1];
		}
	}
	
	var MTBody = document.getElementsByTagName('body')[0];
	var qSelector;
	if (window.tfCounter == "1") {
		if (MTBody.classList.contains('modern-template')) {
			qSelector = "#content .richText.component .richText-content p";
			CLMatcher(qSelector);
		}
		else
		{
			qSelector = "#wrapper .richText.component .richText-content p span";
			CLMatcher(qSelector);
		}
	}

	function CLMatcher(qSelector)
	{	
		[].forEach.call(
		document.querySelectorAll(qSelector),
		function(ela) {
			window.strr = ela.innerHTML;
				
			if (ela.innerHTML.indexOf(window.pageCLNumber) != -1) {
					modalFooterArea.innerHTML = "Page CL : "+window.pageCLNumber+" <span class='greenZone'>MATCHES</span> with Tealium data";
    				return false;
			}
			else
			{
				modalFooterArea.innerHTML = "<span class='warningBackdrop'>Tealium Data is not matching with any page value !!</span>";
			}
		})
	}
}