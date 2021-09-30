// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//       id: "context1",
//       title: "Merge PDF",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context2",
//       title: "PDF Meta Editor",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context3",
//       title: "Organize PDF (Beta)",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context4",
//       title: "Video Poster Maker",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context5",
//       title: "Image Cropping Tool",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context6",
//       title: "Image Compressor",
//       contexts: ["all"]
//   });

//   chrome.contextMenus.create({
//       id: "context7",
//       title: "Image Compressor new",
//       contexts: ["all"]
//   });


//   chrome.contextMenus.create({
//       id: "context8",
//       title: "PDF Exporter",
//       contexts: ["all"]
//   });

// });


// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     if (tab) {
//         if (info.menuItemId === "context1"){
//             showPDFMerger();
//         }
//         if (info.menuItemId === "context2"){
//             metaDataEditor();
//         }
//         if (info.menuItemId === "context3"){
//             pdfPageEditor();
//         }
//         if (info.menuItemId === "context4"){
//             videoScreenGrabber();
//         }
//         if (info.menuItemId === "context5"){
//             imageCropper();
//         }
//         if (info.menuItemId === "context6"){
//             imgOpti();
//         }
//         if (info.menuItemId === "context7"){
//             imageCompressor();
//         }
//     }
// });

// var imgInfoObj  = {},
//     alt         = '--',
//     title       = '--',
//     altTitleStr = '--/--',
//     dispWidth   = 0,
//     dispHeight  = 0;

// var ciid = chrome.contextMenus.create({
//     "type"     : "normal",
//     "title"    : chrome.i18n.getMessage("contextMenuStr"),
//     "contexts" : ["image"],
//     "onclick"  : evt,
//       "id"     : "context9"
// });


// //chrome.contextMenus.onClicked.addListener(function(info, tab) {

// chrome.tabs.onSelectionChanged.addListener(function(info, tab){
//     alt         = '--',
//     title       = '--',
//     altTitleStr = '--/--',
//     dispWidth   = 0,
//     dispHeight  = 0;
// });

// chrome.extension.onRequest.addListener(function(request){

//     alt         = request.alt   ? request.alt   : '--';
//     title       = request.title ? request.title : '--';
//     altTitleStr = alt + ' / ' + title;

//     dispWidth  = request.dispWidth  ? request.dispWidth  : 0;
//     dispHeight = request.dispHeight ? request.dispHeight : 0;
// });

// function evt(info,tab){
//     var imgSrc=info.srcUrl,

//         linkType,

//         linkLength,

//         tabUrl=tab.url,

//         popWinWidth,
//         popWinHeight;

//         linkType = (imgSrc.indexOf('data:image/') == 0 && imgSrc.indexOf('base64') > -1) ?
//                    "base64" : "normal";

//         linkLength = linkType == "normal" ? imgSrc.length : 75;

//         popWinWidth = linkLength < 75 ? linkLength * 8 + 100 : 800;
//         popWinHeight = 220;

//         chrome.windows.create({
//             "type"   : "popup",
//             "url"    : "view/vii.html",
//             "width"  : popWinWidth,
//             "height" : popWinHeight
//         });

//         imgInfoObj={
//             "imgSrc"        :imgSrc,
//             "linkType"      :linkType,
//             "tabUrl"        :tabUrl,
//             "popWinWidth"   :popWinWidth,
//             "popWinHeight"  :popWinHeight,
//             "linkLength"    :linkLength,
//             "altTitleStr"   :altTitleStr,
//             "dispWidth"     :dispWidth,
//             "dispHeight"    :dispHeight
//         };
// }
