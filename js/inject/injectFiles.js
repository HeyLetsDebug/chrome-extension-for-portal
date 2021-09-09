var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.runtime.getURL('/css/asset/clPopupStyle.css');
(document.head||document.documentElement).appendChild(style);


/******************************/ // Insert DSM Modal Starts Here /******************************/

var style = "<div id='modalDSM'>"+
   "<div class='modalcust-content'>"+
      "<div class='modal-header'>"+
         "<span class='closeModalDsm'>&times;</span>"+
        "<h2>Tealium Checker</h2>"+
      "</div>"+
      "<div class='modal-body' id='modalContentArea'>"+
      "</div>"+
   "</div>"+
"</div>";
document.getElementById("wrapper").insertAdjacentHTML("beforeend", style);

/******************************/ // Insert DSM Modal Ends Here /******************************/