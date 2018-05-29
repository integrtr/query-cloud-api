// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const nativeImage = require('electron').nativeImage;

let appIcon = nativeImage.createFromPath(__dirname + '/assets/icon/mac/64x64.png');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1200,
        minHeight: 800,
        icon: appIcon
    });
    mainWindow.loadURL('file://' + __dirname + '/webapp/index.html');
});