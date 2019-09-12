import { Xlsx_to_vcf } from "./Xlsx_to_vcf";

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
    let a = new Xlsx_to_vcf()
    await a.read_file("M:/aa2.xlsx")
    console.log("load finish");
    
    await a.get_all_data()

    console.log("END");
    
})

