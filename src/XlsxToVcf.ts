import {Workbook} from "exceljs";

export class XlsxToVcf
{
    workbook: Workbook
    constructor()
    {
        this.workbook = new Workbook()
    }

    async read_file(path: string)
    {
        new Promise((succ)=>
        {
            this.workbook.xlsx.readFile(path).then(succ)
        })
    }
}