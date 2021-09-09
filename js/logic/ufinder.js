var modalDSM = document.getElementById("modalDSM");
var modalDSMContent = document.getElementById("modalContentArea");
var spans = document.getElementsByClassName("closeModalDsm")[0];
spans.onclick = function() {
	modalDSM.classList.remove("modalShower");
	modalDSMContent.innerHTML = "";
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
				modalDSMContent.innerHTML = "Utag is empty !!";

			}
			else
			{
				var data = "gsk.webpage_id";
				if (el.innerHTML.indexOf(data) != -1)
				{


					// var MTBody = document.getElementsByTagName('body')[0];
					// if (MTBody.classList.contains('modern-template')) {

					// 	modalDSMContent.innerHTML = "";

					// 	var idea = st.replace(/\s+/g, '').split('"').join("").replace(/;/g, '').split(',')

					// 	for (var i = 0; i < idea.length; i++) {


					// 		if (idea[i].split(":")[0] == "gsk.legacy_brand") {
					// 			var para = document.createElement("P");
					// 			para.innerHTML = "<span class='tealiumName'>Brand Name</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
					// 			modalDSMContent.appendChild(para);
					// 		} else if (idea[i].split(":")[0] == "gsk.legacy_therapeutic_area") {
					// 			var para = document.createElement("P");
					// 			para.innerHTML = "<span class='tealiumName'>Therapeutic Area</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
					// 			modalDSMContent.appendChild(para);
					// 		} else if (idea[i].split(":")[0] == "gsk.legacy_audience") {
					// 			var para = document.createElement("P");
					// 			para.innerHTML = "<span class='tealiumName'>Audience</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
					// 			modalDSMContent.appendChild(para);
					// 		} else if (idea[i].split(":")[0] == "gsk.webpage_id") {
					// 			var para = document.createElement("P");
					// 			para.innerHTML = "<span class='tealiumName'>CL ID</span>" + "<span class='tealiumDataSpan'>" + idea[i].split(":")[1] + "</span>";
					// 			modalDSMContent.appendChild(para);
					// 		}
					// 	}
					// }
					
					// var someUtagData = st.replace(/,/g, '\n');

					// var regex = new RegExp('"gsk.webpage_id":"(.*?)"');

					// var matches = regex.exec(el.innerHTML);

					// if (matches == null) {

					// 	var regex_new = new RegExp('"gsk.webpage_id": "(.*?)"');
					// 	var matches_new = regex_new.exec(el.innerHTML);

					// 	if (MTBody.classList.contains('modern-template')) {

					// 		console.log("wlahha")

					// 	} else {
					// 		alert(someUtagData);
					// 		var searchCL = document.querySelectorAll('.rte-last-updated .rte-small-font')[0].innerHTML;
					// 		console.log("1 " + matches_new[1].toString());
					// 		if (searchCL.indexOf(matches_new[1].toString()) != -1) {
					// 			alert("Page CL :" + "\n" + searchCL + "\n\n" + "Matches" + "\n\n" + "Utag CL :" + "\n" + matches_new[1]);
					// 		} else {
					// 			alert("Page CL :" + "\n" + searchCL + "\n\n" + "Does Not Matches" + "\n\n" + "Utag CL :" + "\n" + matches_new[1])
					// 		}
					// 	}
					// } else {
						// console.log(matches[1])
						showModalWithData();

						// if (MTBody.classList.contains('modern-template')) {
						// 	var searchCLMT = document.querySelectorAll('.main-body')[0].innerHTML.toString();

						// 	if (searchCLMT.indexOf(matches[1].toString()) != -1) {
						// 		modalDSM.classList.add("modalShower");
						// 		modalDSMContent.innerHTML += "<br /><br />Page CL Matches Utag CL";
						// 	} else {
						// 		modalDSM.classList.add("modalShower");
						// 		modalDSMContent.innerHTML += "<br /><br /><span style=\'background-color:red;color:white;\'>Page CL Does Not Matches Utag CL";
						// 	}

						// } else {
						// 	alert(someUtagData);
						// 	var searchCL = document.querySelectorAll('.rte-last-updated .rte-small-font')[0].innerHTML;

						// 	if (searchCL.indexOf(matches[1].toString()) != -1) {
						// 		alert("Page CL :" + "\n" + searchCL + "\n\n" + "Matches With" + "\n\n" + "Utag CL :" + "\n" + matches[1]);
						// 	} else {
						// 		alert("Page CL :" + "\n" + searchCL + "\n\n" + "Does Not Matches With" + "\n\n" + "Utag CL :" + "\n" + matches[1])
						// 	}
						// }
					// }

				} else {

					showModalWithData()
					modalDSMContent.innerHTML += "<span class='warningBackdrop'>CL ID Not Available !!</span>";

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
	
	[].forEach.call(
		document.querySelectorAll('#content .richText.component .richText-content p'),
		function(ela) {
			window.strr = ela.innerHTML;
			// console.log(window.pageCLNumber)
			if (ela.innerHTML.indexOf(window.pageCLNumber) != -1) {
				modalDSMContent.innerHTML += "Page CL : "+window.strr;
			}
		}
		)
}

// function recursivelySearchString(str,from){
// var notFoundAlarm = 0;
//     for(var i=0; i<from.length ; i++)
//     {
//         if(from[i].innerHTML.indexOf(str) == -1)
//         {
//             notFoundAlarm = 1;
//         }
//         else
//         {
// 	    from[i].setAttribute("id", "ClMatched");
//             notFoundAlarm = 0;
//         }
//     }
//     if(notFoundAlarm === 0)
// {
// var children = document.getElementById("ClMatched")
//  modalDSM.style.display = "block";
// modalDSMContent.innerHTML += "<br /><br />Matches wala Page CL Matches Utag CL :" + "\n" + matches[1];
// }
// else{
//     return from
// }
// }