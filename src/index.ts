import { XlsxToVcf } from "./XlsxToVcf";

import { app, BrowserWindow, dialog } from "electron";

app.on("ready", async () =>
{
    // let bb = new BrowserWindow(
    // {
    //     width: 300,
    //     webPreferences:
    //     {
    //         preload: `${__dirname}/../dist/src_browser/Main.js`
    //     }
    // })
    // await bb.loadFile("index.html")
    // await bb.webContents.executeJavaScript(`new Main ()`)
    // console.log(dialog.showOpenDialogSync({ properties: ['openFile'] }))
    let a = new XlsxToVcf()
    await a.read_file("M:/aa.xlsx")
    console.log(a);
    
})

