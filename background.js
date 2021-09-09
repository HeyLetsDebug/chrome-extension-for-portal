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

// chrome.runtime.onInstalled.addListner(reason => {
//   console.log(reason)
//   if (reason === 'install')
//   {
//     chrome.tabs.create({
//       url : 'onboarding.html'
//     });
//   };
// })

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['content-script.js']
//   });
// });

//chrome.action.onClicked.addListener(function(tab) { alert('icon clicked')});

try {
  importScripts('content-script.js');
} catch (e) {
  console.error(e);
}

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