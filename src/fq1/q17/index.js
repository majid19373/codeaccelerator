import ExcelJS from 'exceljs'
import fs from 'fs'

const csvFile = () => {
    fs.readFile('./src/fq1/q17/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const products = JSON.parse(data)

        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('Products')

        worksheet.addRow(['Title', 'Price', 'Amount', 'Discount', 'Seller', 'Created'])
        products.forEach(item => {
            worksheet.addRow([
                item.title,
                item.price,
                item.amount,
                item.discount,
                item.seller,
                (new Date(item.created)).toString()
            ])
        });

        const path = `./src/fq1/q17/${(new Date().getTime())}.csv`
        workbook.csv.writeFile(path)
        .then(() => {
            console.log('Excel file created successfully')
            process.exit()
        })
        .catch(error => {
            console.error(error)
            process.exit()
        })


    })
    
}

export default csvFile