// import Excel from "exceljs";

// var workbook = new Excel.Workbook();

import { app, BrowserWindow } from "electron";

app.on("ready", async () =>
{
    let bb = new BrowserWindow(
    {
        width: 300,
        webPreferences:
        {
            preload: `${__dirname}/../dist/src_browser/Main.js`
        }
    })
    await bb.loadFile("index.html")
    await bb.webContents.executeJavaScript(`new Main ()`)
})