import { Xlsx_to_vcf } from "./Xlsx_to_vcf";

import { app, BrowserWindow, dialog, ipcMain } from "electron";

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

    ipcMain.on("tell_you_the_file_path", async (e:any, msg:string) =>
    {
        let xlsx_path = msg
        let vcf_path = dialog.showSaveDialogSync({filters: [
            { name: 'vcf file', extensions: ['vcf'] },
        ]})
        if(vcf_path)
        {
            let a = new Xlsx_to_vcf()
            try{
                await a.read_file(xlsx_path)
                await a.save_file(vcf_path)
            }
            catch(e)
            {
                dialog.showMessageBox({type:"error", message:"反正报错了，你确定你放进来的是xlsx文件??????"})
            }
            
        }
    })
    
})

