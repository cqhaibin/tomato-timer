chrome.browserAction.onClicked.addListener(function(tab) {
    var destUrl = './index.html';
    chrome.tabs.create({ url: destUrl });
});