chrome.browserAction.onClicked.addListener(function(tab) {
    var destUrl = './tomatotimer/index.html';
    chrome.tabs.create({ url: destUrl });
});