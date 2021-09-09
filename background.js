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

chrome.runtime.onInstalled.addListner(reason => {
  if (reason === 'install')
  {
    chrome.tabs.create({
      url : 'onboarding.html'
    });
  };
})