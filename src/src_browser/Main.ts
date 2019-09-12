class Main
{
    constructor()
    {
        document.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let files = (<DataTransfer>e.dataTransfer).files
            for(let i in files)
            {
                console.log('File(s) you dragged here: ', files[i].path)
            }
        });
        document.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        console.log("readasdasd");
        
    }
}

(<any>global).Main = Main