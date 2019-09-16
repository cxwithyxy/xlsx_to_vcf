import {Workbook, Worksheet} from "exceljs";
import {openSync, writeSync, closeSync} from "fs";

class Not_row extends Error{}

/**
 * 使用方法
 * let a = new Xlsx_to_vcf()
 * await a.read_file("M:/aa.xlsx")
 * await a.save_file("M:/a.vcf")
 *
 * @export
 * @class Xlsx_to_vcf
 */
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
    
    async save_file(path: string)
    {
        let sheet = this.workbook.getWorksheet(1)
        let index = 0
        let vcf_file = openSync(path,"w")
        for(;;)
        {
            try
            {
                index ++
                let n_and_p = await this.get_name_and_phone(sheet, index)
                let vcf_str: string
                vcf_str = `BEGIN:VCARD\nVERSION:3.0\nN:${n_and_p.name};;;;\nFN:${n_and_p.name}\nTEL;TYPE=CELL:${n_and_p.phone}\nEND:VCARD\n`
                writeSync(vcf_file, vcf_str)
            }catch(e)
            {
                break
            }

        }
        closeSync(vcf_file)
    }

    async get_name_and_phone(sheet: Worksheet, row_num: number)
    {
        if(row_num > sheet.rowCount)
        {
            throw new Not_row(`${row_num} is not exists , max is ${sheet.rowCount}`)
        }
        return {
            name: sheet.getCell(`B${row_num}`).value,
            phone: sheet.getCell(`A${row_num}`).value
        }
    }
}