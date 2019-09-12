import { ipcRenderer } from "electron";
class Main
{
    constructor()
    {
        document.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let files = (<DataTransfer>e.dataTransfer).files
            ipcRenderer.send("tell_you_the_file_path", files[0].path)
        });
        document.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }
}

(<any>global).Main = Main