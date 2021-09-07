var modalDSM = document.getElementById("modalDSM");
	var modalDSMContent = document.getElementById("modalContentArea");
	var spans = document.getElementsByClassName("closeModalDsm")[0];
	spans.onclick = function() {
		modalDSM.style.display = "none";
		modalDSMContent.innerHTML = "";
    };
[].forEach.call(
    document.querySelectorAll('script'),
    function (el) {
    	var st = el.innerHTML; 
		st = st.replace(/.*\{|\}/gi, ''); 

        if (el.innerHTML.indexOf("utag_data") != -1) {
        	if (el.innerHTML.indexOf("gsk.legacy_therapeutic_area") == -1 && el.innerHTML.indexOf("gsk.legacy_brand") == -1 && el.innerHTML.indexOf("gsk.legacy_audience") == -1 && el.innerHTML.indexOf("gsk.webpage_id") == -1) {
        		// alert("Utag is empty !!");
        		modalDSM.style.display = "block";
				modalDSMContent.innerHTML = "Utag is empty !!";
        	}
        	else{
	        	var data = "gsk.webpage_id";
	        	if (el.innerHTML.indexOf(data) != -1) {
	        		
	        		
					var MTBody = document.getElementsByTagName('body')[0];
	        		if(MTBody.classList.contains('modern-template'))
					{	
						//modalDSMContent.innerHTML = st.replace(/,/g, '<br />');

						var idea = st.replace(/\s+/g, '').split('"').join("").replace(/;/g, '').split(',')

						for (var i = idea.length - 1; i >= 0; i--) {

							var para = document.createElement("P");
							para.innerHTML = idea[i].split(":")[0] + " : "+ idea[i].split(":")[1];
							modalDSMContent.appendChild(para);
						}
					}
		    		var someUtagData = st.replace(/,/g, '\n');
		            var regex = new RegExp('"gsk.webpage_id":"(.*?)"');
					var matches = regex.exec(el.innerHTML);

						if(matches == null)
		            	{
		            		 var regex_new = new RegExp('"gsk.webpage_id": "(.*?)"');
							var matches_new = regex_new.exec(el.innerHTML);
							if(MTBody.classList.contains('modern-template'))
							{
								// var searchCLMT = document.getElementById('content').innerHTML;
							 //      if (searchCLMT.indexOf(matches_new[1].toString()) != -1)
								// { 
								// 	modalDSM.style.display = "block";
								// 	modalDSMContent.innerHTML += "<br /><br />Matches new wala Page CL Matches Utag CL :" + matches_new[1];

								// }
								// else{
								// 	modalDSM.style.display = "block";
								// 	modalDSMContent.innerHTML += "<br /><br /><span style=\'background-color:red;color:white;\'>Matches new wala Page CL Does Not Matches Utag CL :" + matches_new[1];
								// }
								// console.log(matches[1].toString());
								// var found = recursivelySearchString(matches[1].toString(),document.querySelectorAll("#content p"))
								// found.style.backgroundColor = 'yellow'
								// found.removeAttribute("id");
							}
							else
							{
								alert(someUtagData);
								var searchCL = document.querySelectorAll('.rte-last-updated .rte-small-font')[0].innerHTML;
		            			console.log("1 " + matches_new[1].toString());
							      if (searchCL.indexOf(matches_new[1].toString()) != -1)
								{ 
									alert("Page CL :"+ "\n" + searchCL + "\n\n" + "Matches" + "\n\n"+ "Utag CL :" + "\n" + matches_new[1]);
								}
								else{
									alert("Page CL :"+ "\n" + searchCL + "\n\n" + "Does Not Matches" + "\n\n"+ "Utag CL :" + "\n" + matches_new[1])
								}
							}
						}
		            	else
		            	{
							console.log(matches[1])
							if(MTBody.classList.contains('modern-template'))
							{
								var searchCLMT = document.querySelectorAll('.main-body')[0].innerHTML.toString();

								 if (searchCLMT.indexOf(matches[1].toString()) != -1)
								{ 
									modalDSM.style.display = "block";
									//modalDSMContent.innerHTML += "<br /><br />Page CL Matches Utag CL : " + "\n" + matches[1];
									modalDSMContent.innerHTML += "<br /><br />Page CL Matches Utag CL";
								}
								else{
									// not able to show the wrong page CL for DSM due to lack of identifier
									modalDSM.style.display = "block";
									//modalDSMContent.innerHTML += "<br /><br /><span style=\'background-color:red;color:white;\'>Page CL Does Not Matches Utag CL : " + matches[1];
									modalDSMContent.innerHTML += "<br /><br /><span style=\'background-color:red;color:white;\'>Page CL Does Not Matches Utag CL";
								}

							}
							else
							{
								alert(someUtagData);
								var searchCL = document.querySelectorAll('.rte-last-updated .rte-small-font')[0].innerHTML;

							      if (searchCL.indexOf(matches[1].toString()) != -1)
								{ 
									alert("Page CL :"+ "\n" + searchCL + "\n\n" + "Matches With" + "\n\n"+ "Utag CL :" + "\n" + matches[1]);
								}
								else{
									alert("Page CL :"+ "\n" + searchCL + "\n\n" + "Does Not Matches With" + "\n\n"+ "Utag CL :" + "\n" + matches[1])
								}	
							}
		            	}

	        	}
	        	else
	        	{
	        		modalDSM.style.display = "block";
	        		modalDSMContent.innerHTML = "Utag is empty !!";

	        	}
        	}
        }
    }
);

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