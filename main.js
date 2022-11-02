const { app, BrowserWindow } = require('electron')
const path = require('path');
const connect  = require('gulp-connect-php')
const electronReload = require('electron-reload')

var con = connect.server()
var window = null

const createWindow  = () => {
    window = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        resizable: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    window.loadURL("http://127.0.0.1:8000/public/index.html")
    window.removeMenu()
    window.openDevTools()
}



app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})

app.on('window-all-closed', () => {
    window = null
    if (process.platform !== 'darwin') app.quit()
})