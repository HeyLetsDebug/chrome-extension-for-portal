var checFlag = document.getElementById("checkBox");

function getTabID() {
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query({
                active: true,
            }, function (tabs) {
                resolve(tabs[0].id);
            })
        } catch (e) {
            reject(e);
        }
    })
}

// async function mobileChecker() {
//     let responseTabID = await getTabID();
//     chrome.scripting.executeScript({
//         target: {
//             tabId: responseTabID,
//             allFrames: true
//         },
//         function: showErrorMobileComp
//     }, (results) => {
//         var whtFind = results[0].result;
//         if (whtFind == "1") {
//             document.getElementById("mobile-component-finder").setAttribute("style", "display: block !important");
//         } else {
//             document.getElementById("mobile-component-finder").setAttribute("style", "display: none !important");
//         }
//     });
// }

// mobileChecker();



// chrome.tabs.query({
//     active: true
// }, function(tabs) {
//     let tab = tabs[0];

// });

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

async function selfCheck() {
    let tabId = await getTabID();

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
        } 
        // else if (favBox1 == "prescriberunhide") {
        //     chrome.scripting.executeScript({
        //         target: {
        //             tabId: tabId,
        //             allFrames: true
        //         },
        //         function: prescriberunhider
        //     });
        // } 
        // else if (favBox1 == "non-prescriberunhide") {
        //     chrome.scripting.executeScript({
        //         target: {
        //             tabId: tabId,
        //             allFrames: true
        //         },
        //         function: nonprescriberunhider
        //     });
        // } 
        else if (favBox1 == "master-finderunhide") {
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
        }
         else if (favBox1 == "caption-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: captionUnhider
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
        } else if (favBox1 == "nonascii-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeAsciiChecker
            });
        } else if (favBox1 == "anchors-unhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeAnchorChecker
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
        }
        // else if (unfavBox1 == "prescriberunhide") {
        //     chrome.scripting.executeScript({
        //         target: {
        //             tabId: tabId,
        //             allFrames: true
        //         },
        //         function: presunhideuncheck
        //     });
        // } else if (unfavBox1 == "non-prescriberunhide") {
        //     chrome.scripting.executeScript({
        //         target: {
        //             tabId: tabId,
        //             allFrames: true
        //         },
        //         function: nonpresunhideuncheck
        //     });
        // } 
        else if (unfavBox1 == "master-finderunhide") {
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
        } else if (unfavBox1 == "caption-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: captionUncheck
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
        } else if (unfavBox1 == "nonascii-fontunhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeAsciiCheckerRemover
            });
        } else if (unfavBox1 == "anchors-unhide") {
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId,
                    allFrames: true
                },
                function: initializeAnchorCheckerRemover
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

// function prescriberunhider() {
//     var els2 = document.querySelectorAll(".personalization-prescriber-box");
//     for (var i = 0; i < els2.length; i++) {
//         els2[i].setAttribute("style", "display: block !important");
//     }
// }

// function nonprescriberunhider() {
//     var els3 = document.querySelectorAll(".personalization-non-prescriber-box");
//     for (var i = 0; i < els3.length; i++) {
//         els3[i].setAttribute("style", "display: block !important");
//     }
// }

function smallfontunhider() {
    var els9 = document.querySelectorAll(".rte-small-font,.articleTeaser p");
    for (var i = 0; i < els9.length; i++) {
        els9[i].setAttribute("style", "color: #0aa00e !important; font-weight: bold;");
    }
}
function captionUnhider() {
    var els10 = document.querySelectorAll(".richText-content .caption");
    for (var i = 0; i < els10.length; i++) {
        els10[i].setAttribute("style", "color: #0aa00e !important; font-weight: bold;");
    }
}

function headingtagsboldunhider() {
    var strongFinder = document.querySelectorAll("h3>strong, h2>strong, h4>strong, h1>strong,h3>b, h2>b, h4>b,h1>b");
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

// function presunhideuncheck() {
//     var els6 = document.querySelectorAll(".personalization-prescriber-box");
//     for (var i = 0; i < els6.length; i++) {
//         els6[i].setAttribute("style", "display: none !important");
//     }
// }

// function nonpresunhideuncheck() {
//     var els6 = document.querySelectorAll(".personalization-prescriber-box");
//     for (var i = 0; i < els6.length; i++) {
//         els6[i].setAttribute("style", "display: none !important");
//     }
// }

function headtaguncheck() {
    var strongFinder = document.querySelectorAll("h3>strong, h2>strong, h4>strong,h1>strong,h1>b,h3>b, h2>b, h4>b");
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

function captionUncheck() {
    var els10 = document.querySelectorAll(".richText-content .caption");
    for (var i = 0; i < els10.length; i++) {
        els10[i].removeAttribute("style");
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
    var someArray = [];
    for (var i = 0; i < els3.length; i++) {

        if (/content--/.test(els3[i].className)) {
            let classWordsLists = els3[i].className;
            let classPattern = classWordsLists.match(/(content--)\w+/g).toString();
            someArray.push(classPattern)
        }
        if (/grid_/.test(els3[i].className)) {
            let gridWordsLists = els3[i].className;
            let gridPattern = gridWordsLists.match(/(grid_)\w+/g).toString();
            someArray.push(gridPattern)
        }
        if (Array.isArray(someArray) && someArray.length) {
            
            var h = document.createElement("h6");
            h.className = "GridDetails";
            h.innerHTML = someArray.join(" & ");
            h.style.backgroundColor = "yellow";
            h.style.color = "black";
            els3[i].prepend(h);
            someArray = [];
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
    var MTBody = document.getElementsByTagName('body')[0];
    var imager;
    if (MTBody.classList.contains('modern-template')) {
        imager = document.querySelectorAll(".layout-inner .main-body img");
    }
    else
    {
        imager = document.querySelectorAll(".component img:not(.header-image .component-content img):not(.image-gsk-logo .component-content img):not(.image-search-header .component-content img):not(.hcpwebshop .component-content img):not(.rte-footer-links .component-content img)");
    }
    var imgSourceString;
    var str2 = "article-teaser-image-src";
    for (var i = 0; i < imager.length; i++) {

        if (imager[i].getAttribute("src")) {
            imgSourceString = imager[i].src.toString();
            if (!imgSourceString.includes(str2)) {
                imgSourceString = imager[i].src.toString();
                const imagePWidth = imager[i].closest('div.component-content').offsetWidth
                imageTager(imgSourceString, imagePWidth);
            }
        } else {
            imgSourceString = imager[i].getAttribute("data-src");
                const imagePWidth = imager[i].closest('div.component-content').offsetWidth
                imageTager(imgSourceString, imagePWidth);
        }

    }

    function imageTager(path, widthOfP) {
        var h = document.createElement("span");
        h.className = "AltDetails";
        h.style.width = widthOfP + "px";
        if (imager[i].alt == "") {
        h.innerHTML = "<strong>ALT Not Available </strong>";
        } else {
        h.innerHTML = "<strong>ALT : </strong>" + imager[i].alt;
        }

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
                h.innerHTML += "<br/><strong>Size : </strong>" + SizeinKB.toFixed(2) + 'KB';
            }
            xhr.send();
        } else {
            imager[i].closest('div.component-content').before(h);
            var imageUrl = path;
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', imageUrl, true);
            xhr.responseType = 'blob';
            xhr.onload = function() {
                blob = xhr.response;
                var SizeinKB = blob.size / 1024;
                h.innerHTML += "<br/><strong>Size : </strong>" + SizeinKB.toFixed(2) + 'KB';
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
    let els5 = document.querySelectorAll("#content h1,#content h2,#content h3,#content h4,#content h5,#content h6,#content a,#content p,#content span,#content td,#content li");
    let searched = '&nbsp;';
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


/******************************///Check For Sup/Sub/Non-Ascii in content area/******************************/

function initializeAsciiChecker() {
let allData = document.querySelectorAll("#content .main-body h1,#content .main-body h2,#content .main-body h3,#content .main-body h4,#content .main-body h5,#content .main-body h6,#content .main-body a,#content .main-body p,#content .main-body span,#content .main-body td,#content .main-body li")
//let allData = document.querySelectorAll("#checkerd");
    

    for (let i = 0; i < allData.length; i++) {
        var pureData = allData[i].innerHTML;

        var elems = allData[i];

        isAsciiOnly(pureData, elems)
    }  

    function isAsciiOnly(str, welems) {
        //let arr = [160, 223, 169, 8217, 8804,8805, 8212];
        let arr = [185,178,179,8308,8309,8310,8311,8312,8313,8304,7491,7495,7580,7496,7497,7584,7501,688,7590,690,7503,737,7504,8319,7506,7510,7520,691,738,7511,7512,7515,695,739,696,7611,8315,7468,7470,7472,7473,7475,7476,7477,7478,7479,7480,7481,7482,7484,7486,7487,7488,7489,11389,7490,739,696,7411,8320, 8321,8322,8323,8325,8325,8326,8327,8328,8329];
         const usingSpread = [...str];

        for (let val of usingSpread) { 
              //if (val.charCodeAt(0) > 127 && !arr.includes(val.charCodeAt(0)))
              if (arr.includes(val.charCodeAt(0)))
              {  
                // console.log(val)
                // console.log(val.charCodeAt(0))
                usingSpread[usingSpread.indexOf(val)] = "<span class='markedTextNonAscii'>" + val + "</span>";
                let newString = usingSpread.join("");
                welems.innerHTML = newString;
              }
        }
    }
}

function initializeAsciiCheckerRemover() {
    let note = document.querySelectorAll('.markedTextNonAscii');
    for (var i = 0; i < note.length; i++) {
        note[i].outerHTML = note[i].innerHTML
    }
}


/******************************///Check For Sup/Sub/Non-Ascii in content area/******************************/

function initializeAnchorChecker() {
    let apather = document.querySelectorAll("#content h1,#content h2,#content h3,#content p,#content span,#content li");
    for (var i = apather.length - 1; i >= 0; i--) {
        try{
          if (apather[i].childNodes[0].nodeName == "A" && apather[i].childNodes[0].hasAttribute('id')) {
            
              var h = document.createElement("span");
              h.className = "AnchorDetails";
              h.innerHTML = "#"+apather[i].childNodes[0].getAttribute('id');
              apather[i].prepend(h);

          } 
        }
        catch(error){
          console.log(error)
        }
    }
}

function initializeAnchorCheckerRemover() {
    document.querySelectorAll('.AnchorDetails').forEach(function(a) {
      a.remove()
    })
}

