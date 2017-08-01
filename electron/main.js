var electron = require('electron');

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow();
    console.log(__dirname);
    mainWindow.loadURL("file://" + __dirname + "/../dest/index.html");
});