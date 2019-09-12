import {Workbook, Worksheet} from "exceljs";

export class Xlsx_to_vcf
{
    workbook: Workbook
    constructor()
    {
        this.workbook = new Workbook()
    }

    async read_file(path: string)
    {
        this.workbook = await this.workbook.xlsx.readFile(path)
    }
    
    async get_all_data()
    {
        let sheet = this.workbook.getWorksheet(1)
        console.log(sheet.getCell('A2').value)
        console.log(sheet.getCell('B2').value)
        return "aa"
    }
}