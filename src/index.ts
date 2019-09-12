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


    console.log(dialog.showSaveDialogSync({filters: [
        { name: 'vcf file', extensions: ['vcf'] },
    ]}))
    
    // let a = new Xlsx_to_vcf()
    // await a.read_file("M:/aa.xlsx")
    // await a.save_file("M:/a.vcf")

    console.log("END");
    
})

