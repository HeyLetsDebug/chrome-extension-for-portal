// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let tabs = await chrome.tabs.query(queryOptions);
//   return tabs;
// }
// let tab = await getCurrentTab();

// chrome.scripting.executeScript({
//   target: {tabId: tab.id},
//   files: ['content-script.js']
// });

// chrome.action.onClicked.addListner(tab =>{

// })


// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['content-script.js']
//   });
// });


// try {
//   importScripts('content-script.js');
// } catch (e) {
//   console.error(e);
// }

// chrome.action.disable();
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
//   if (changeInfo.status == "complete") {
//     console.log(tab.url)
//     if (tab.url.indexOf('yahoo') !=-1) {
//       console.log('enable');
//       chrome.action.enable(tabId);
//     } else {
//       console.log('disable');
//       chrome.action.disable(tabId);
//     }
//   }
// })

// Share with Marcin
// https://www.youtube.com/watch?v=o8RkZ0jlna8
// http://csb-scldr.netlify.app/