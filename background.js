// background.js

// Executes Core.js on button click
function handleClick(tab){
	chrome.tabs.executeScript(null,{file: "Core.js"});
}
chrome.browserAction.onClicked.addListener(handleClick);
