var checFlag = document.getElementById("checkBox");
var tabId
document.addEventListener("DOMContentLoaded", function() {
    geturl();
});

function geturl() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
        tabId = tabs[0].id;
    });
}


chrome.tabs.query({
    active: true
}, function(tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
            allFrames: true
        },
        function: showErrorMobileComp
    }, (results) => {
        var whtFind = results[0].result;
        if (whtFind == "1") {
            document.getElementById("mobile-component-finder").setAttribute("style", "display: block !important");
        } else {
            document.getElementById("mobile-component-finder").setAttribute("style", "display: none !important");
        }
    });
});


function showErrorMobileComp() {
    var foundOrNot;
    var els4 = document.querySelectorAll(".mobile-only");
    if (els4[0] != null) {
        foundOrNot = "1";
    } else {
        foundOrNot = "0";
    }
    return foundOrNot;
}
/******************************/ //self QA section starts here /******************************/

function selfCheck() {

    // checking which checkboxes are selected in the self QA box
    var checkedlistBox1 = []
    var checkboxesBox1 = document.querySelectorAll('section input[type=checkbox]:checked');

    for (var i = 0; i < checkboxesBox1.length; i++) {
        checkedlistBox1.push(checkboxesBox1[i].value);
    }
    // console.log(checkedlistBox1);


    // checking which checkboxes are not selected in the self QA box
    var uncheckedlistBox1 = []
    var emptycheckboxesBox1 = document.querySelectorAll('section input[type=checkbox]:not(:checked)');
    for (var i = 0; i < emptycheckboxesBox1.length; i++) {
        uncheckedlistBox1.push(emptycheckboxesBox1[i].value);
    }

    checkedlistBox1.forEach((favBox1) => {
        if (favBox1 == "mobileunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: displayMobileOnly
            });
        } else if (favBox1 == "removeloggedinpers") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: removeloggedin
            });
        } else if (favBox1 == "prescriberunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: prescriberunhider
            });
        } else if (favBox1 == "non-prescriberunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: nonprescriberunhider
            });
        } else if (favBox1 == "master-finderunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                files: ['./js/logic/masterChecker.js']
            });
        } else if (favBox1 == "small-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: smallfontunhider
            });
        } else if (favBox1 == "hash-linkunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId
                },
                files: ['./js/logic/pagelevel.js']
            });
        } else if (favBox1 == "other-pageurlunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId
                },
                files: ['./js/logic/pageurlunhide.js']
            });
        } else if (favBox1 == "heading-tags-boldunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: headingtagsboldunhider
            });
        } else if (favBox1 == "highlightAEMGrids") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: ShowMeGrid
            });
        } else if (favBox1 == "showAtlTagsFront") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: AltTagShower
            });
        } else if (favBox1 == "nbspHighlighter") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeNbsp
            });
        }

    })


    uncheckedlistBox1.forEach((unfavBox1) => {

        if (unfavBox1 == "mobileunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: mobileunhider
            });
        } else if (unfavBox1 == "removeloggedinpers") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: remloggedinperss
            });
        } else if (unfavBox1 == "prescriberunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: presunhideuncheck
            });
        } else if (unfavBox1 == "non-prescriberunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: nonpresunhideuncheck
            });
        } else if (unfavBox1 == "master-finderunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: mastrfndruncheck
            });
        } else if (unfavBox1 == "small-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: smallfntuncheck
            });
        } else if (unfavBox1 == "hash-linkunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: hashlnkuncheck
            });
        } else if (unfavBox1 == "other-pageurlunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: othpguncheck
            });
        } else if (unfavBox1 == "heading-tags-boldunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: headtaguncheck
            });
        } else if (unfavBox1 == "highlightAEMGrids") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: removeShowMeGrid
            });
        } else if (unfavBox1 == "showAtlTagsFront") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: AltTagShowerRemove
            });
        } else if (unfavBox1 == "nbspHighlighter") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeNbspRemover
            });
        }

    })

}

var el = document.getElementById('self-check-button');
if (el) {
    el.addEventListener('click', selfCheck, false);
}

function showUtag() {
    chrome.tabs.query({
        active: true
    }, function(tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ['./js/logic/ufinder.js']
        });
    });
}

var el2 = document.getElementById('show-utag-button');
if (el2) {
    el2.addEventListener('click', showUtag, false);
}




var el3 = document.getElementById("page-meta-wrapper");
if (el3) {
    el3.addEventListener('click', showMetaData, false);
}

function showMetaData() {

    function findListOfMeta() {
        var metas = document.getElementsByTagName("meta");
        var metasOgDesc = document.querySelectorAll("meta[property='og:description']")[0];
        var metasOgTitle = document.querySelectorAll("meta[property='og:title']")[0];
        var txt = "";
        for (i = 0; i < metas.length; i++) {
            if (metas[i].name != "" && metas[i].name != "viewport" && metas[i].name != "twitter:card") {
                txt = txt + "<tr><td><span class='HighlightMetaName'>" + metas[i].name + "</span></td></tr><tr><td><span class='highlightmemeta'>" + metas[i].content + "</span></td></tr>";
            }
        }
        if (metasOgTitle !== undefined) {
            txt = txt + "<tr><td><span class='HighlightMetaName'>og:title</span></td></tr><tr><td><span class='highlightmemeta'>" + metasOgTitle.content + "</span></td></tr>";
        }
        if (metasOgDesc !== undefined) {
            txt = txt + "<tr><td><span class='HighlightMetaName'>og:description</span></td></tr><tr><td><span class='highlightmemeta'>" + metasOgDesc.content + "</span></td></tr>";
        }

        return txt;
    }

    chrome.tabs.query({
        active: true
    }, function(tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: findListOfMeta
        }, (results) => {
            document.getElementById("show-page-meta").innerHTML = results[0].result;
            console.log(document.getElementById("show-page-meta").innerHTML)
            var rowMeta = document.querySelectorAll("tr:nth-child(2n)")
            for (var i = 0; i < rowMeta.length; i++) {
                rowMeta[i].classList.add("addBorder");
            }
        });
    });

    function findListOfHeader() {
        var header1 = document.querySelectorAll("#content h1");
        var header2 = document.querySelectorAll("#content h2");
        var header3 = document.querySelectorAll("#content h3");
        var header4 = document.querySelectorAll("#content h4");
        var header5 = document.querySelectorAll("#content h5");
        var header6 = document.querySelectorAll("#content h6:not(.AltDetails)");
        var txtH = "";

        for (i = 0; i < header1.length; i++) {
            if (i == 0) {
                txtH = txtH + "<tr><td>H1</td><td><span class='highlightmemeta'>" + header1[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header1[i].innerHTML + "</span></td></tr>";
            }
        }

        for (i = 0; i < header2.length; i++) {

            if (i == 0) {
                txtH = txtH + "<tr><td>H2</td><td><span class='highlightmemeta'>" + header2[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header2[i].innerHTML + "</span></td></tr>";

            }

        }
        for (i = 0; i < header3.length; i++) {
            if (i == 0) {
                txtH = txtH + "<tr><td>H3</td><td><span class='highlightmemeta'>" + header3[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header3[i].innerHTML + "</span></td></tr>";
            }
        }
        for (i = 0; i < header4.length; i++) {
            if (i == 0) {
                txtH = txtH + "<tr><td>H4</td><td><span class='highlightmemeta'>" + header4[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header4[i].innerHTML + "</span></td></tr>";
            }
        }
        for (i = 0; i < header5.length; i++) {
            if (i == 0) {
                txtH = txtH + "<tr><td>H5</td><td><span class='highlightmemeta'>" + header5[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header5[i].innerHTML + "</span></td></tr>";
            }
        }
        for (i = 0; i < header6.length; i++) {
            if (i == 0) {
                txtH = txtH + "<tr><td>H6</td><td><span class='highlightmemeta'>" + header6[i].innerHTML + "</span></td></tr>";
            } else {
                txtH = txtH + "<tr><td></td><td><span class='highlightmemeta'>" + header6[i].innerHTML + "</span></td></tr>";
            }
        }
        return txtH;
    }
    chrome.tabs.query({
        active: true
    }, function(tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: findListOfHeader
        }, (results) => {
            document.getElementById("show-page-headers").innerHTML = results[0].result;
        });
    });
}

/******************************/ // self QA section ends here /******************************/


/******************************/ // All Functions section Starts here /******************************/
function displayMobileOnly() {
    var els = document.querySelectorAll(".mobile-only");
    for (var i = 0; i < els.length; i++) {
        els[i].setAttribute("style", "display: block !important");
    }
}

function removeloggedin() {
    var els1 = document.querySelectorAll(".logged-in-box-pers");
    for (var i = 0; i < els1.length; i++) {
        els1[i].setAttribute("style", "display: block !important");
    }
}

function prescriberunhider() {
    var els2 = document.querySelectorAll(".personalization-prescriber-box");
    for (var i = 0; i < els2.length; i++) {
        els2[i].setAttribute("style", "display: block !important");
    }
}

function nonprescriberunhider() {
    var els3 = document.querySelectorAll(".personalization-non-prescriber-box");
    for (var i = 0; i < els3.length; i++) {
        els3[i].setAttribute("style", "display: block !important");
    }
}

function smallfontunhider() {
    var els9 = document.querySelectorAll(".rte-small-font,.articleTeaser p");
    for (var i = 0; i < els9.length; i++) {
        els9[i].setAttribute("style", "color: #0aa00e !important; font-weight: bold;");
    }
}

function headingtagsboldunhider() {
    var strongFinder = document.querySelectorAll("h3>strong, h2>strong, h4>strong");
    for (var i = 0; i < strongFinder.length; i++) {
        strongFinder[i].setAttribute("style", "border: 5px solid #1600ff !important");
    }
}

function mobileunhider() {
    var els4 = document.querySelectorAll(".mobile-only");
    for (var i = 0; i < els4.length; i++) {
        els4[i].setAttribute("style", "display: none !important");
    }
}

function remloggedinperss() {
    var els5 = document.querySelectorAll(".logged-in-box-pers");
    for (var i = 0; i < els5.length; i++) {
        els5[i].setAttribute("style", "display: none !important");
    }
}

function presunhideuncheck() {
    var els6 = document.querySelectorAll(".personalization-prescriber-box");
    for (var i = 0; i < els6.length; i++) {
        els6[i].setAttribute("style", "display: none !important");
    }
}

function nonpresunhideuncheck() {
    var els6 = document.querySelectorAll(".personalization-prescriber-box");
    for (var i = 0; i < els6.length; i++) {
        els6[i].setAttribute("style", "display: none !important");
    }
}

function headtaguncheck() {
    var strongFinder = document.querySelectorAll("h3>strong, h2>strong, h4>strong");
    for (var i = 0; i < strongFinder.length; i++) {
        strongFinder[i].removeAttribute("style");
    }
}

function othpguncheck() {
    var pageurlunhide = document.querySelectorAll("img,a");
    for (var i = 0; i < pageurlunhide.length; i++) {
        pageurlunhide[i].removeAttribute("style");
    }
}

function hashlnkuncheck() {
    var removehashLinks = document.querySelectorAll("img,a");
    for (var i = 0; i < removehashLinks.length; i++) {
        removehashLinks[i].removeAttribute("style");
    }
}

function smallfntuncheck() {
    var els9 = document.querySelectorAll(".rte-small-font,.articleTeaser p");
    for (var i = 0; i < els9.length; i++) {
        els9[i].removeAttribute("style");
    }
}

function mastrfndruncheck() {
    var removeLinks = document.querySelectorAll("img,a");
    for (var i = 0; i < removeLinks.length; i++) {
        removeLinks[i].removeAttribute("style");
    }
}
/******************************/ // All Functions section ends here /******************************/

/******************************/ // lets show some DSM Grids /******************************/

function ShowMeGrid() {
    var els3 = document.querySelectorAll(".layout-inner .main-body .component:not(.navigation-secondary):not(.navigation):not(.navigation-secondary .box):not(.navigation-secondary .image)");
    for (var i = 0; i < els3.length; i++) {
        if (/grid_/.test(els3[i].className)) {
            var wordsLists = els3[i].className;
            var pattern = wordsLists.match(/(grid_)\w+/g).toString();
            var h = document.createElement("h6");
            h.className = "GridDetails";
            h.innerHTML = pattern;
            h.style.backgroundColor = "yellow";
            els3[i].prepend(h);
        }
        if (/content--/.test(els3[i].className)) {
            var wordsLists = els3[i].className;
            var pattern = wordsLists.match(/(content--)\w+/g).toString();
            var h = document.createElement("h6");
            h.className = "GridDetails";
            h.innerHTML = pattern;
            h.style.backgroundColor = "yellow";
            els3[i].prepend(h);
        }

        els3[i].setAttribute("style", "border: 2px solid red !important");
    }
}

function removeShowMeGrid() {

    document.querySelectorAll(".GridDetails").forEach(e => e.remove());
    var els3 = document.querySelectorAll(".layout-inner .main-body .component:not(.navigation-secondary):not(.navigation):not(.navigation-secondary .box):not(.navigation-secondary .image)");
    for (var i = 0; i < els3.length; i++) {
        els3[i].removeAttribute("style");
    }
}


/******************************/ //Show Alt Tags On Front End/******************************/
function AltTagShower() {
    var imager = document.querySelectorAll(".layout-inner .main-body img");
    var imgSourceString;
    var str2 = "article-teaser-image-src";
    for (var i = 0; i < imager.length; i++) {

        if (imager[i].getAttribute("src")) {
            imgSourceString = imager[i].src.toString();
            if (!imgSourceString.includes(str2)) {
                imgSourceString = imager[i].src.toString();
                imageTager(imgSourceString);
            }
        } else {
            imgSourceString = imager[i].getAttribute("data-src");
            imageTager(imgSourceString);
        }

    }

    function imageTager(path) {
        var h = document.createElement("h6");
        h.className = "AltDetails";
        h.style.backgroundColor = "yellow";
        h.style.position = "absolute";
        h.style.width = "fit-content";
        h.style.zIndex = "9999";

        h.innerHTML = "<strong>ALT : </strong>" + imager[i].alt;
        if (imager[i].classList.contains('article-teaser-image')) {
            imager[i].before(h);
            h.style.top = "0px";
            var imageUrl = path;
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', imageUrl, true);
            xhr.responseType = 'blob';
            xhr.onload = function() {
                blob = xhr.response;
                var SizeinKB = blob.size / 1024;
                h.innerHTML += "<strong> | Size : </strong>" + SizeinKB.toFixed(2) + 'KB';
            }
            xhr.send();
        } else {
            imager[i].before(h);
            var imageUrl = path;
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', imageUrl, true);
            xhr.responseType = 'blob';
            xhr.onload = function() {
                blob = xhr.response;
                var SizeinKB = blob.size / 1024;
                h.innerHTML += "<strong> | Size : </strong>" + SizeinKB.toFixed(2) + 'KB';
            }
            xhr.send();
        }
    }
}

function AltTagShowerRemove() {
    document.querySelectorAll(".AltDetails").forEach(e => e.remove());
}

/******************************///Check For nbsp in content area/******************************/

function initializeNbsp() {
    var els5 = document.querySelectorAll('html body.modern-template #content .layout-inner .main-body .component');
    let searched = '&nbsp;'
    let re = new RegExp(searched, "g");
    for (var i = 0; i < els5.length; i++) {

        let newText = els5[i].innerHTML.replace(re, `<span style="background-color: red" class="markedTextNbs">${searched}</span>`);
        els5[i].innerHTML = newText;
    }
    let note = document.querySelectorAll('.markedTextNbs');
    for (var i = 0; i < note.length; i++) {
        note[i].parentNode.setAttribute("style", "border: 2px solid #07559a !important");
    }
}

function initializeNbspRemover() {
    let note = document.querySelectorAll('.markedTextNbs');
    for (var i = 0; i < note.length; i++) {
        note[i].parentNode.removeAttribute("style");
        note[i].outerHTML = note[i].innerHTML
    }
}