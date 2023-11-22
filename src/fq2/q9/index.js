import { format } from 'date-fns'
import ExcelJS from 'exceljs'
import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        let lastMonth = new Date()
        lastMonth.setMonth(lastMonth.getMonth() - 3)
        lastMonth = format(lastMonth, 'yyyy-MM-dd HH:mm:ss')
        const db = new Database()
        db.connect() 
        try {
            const res = await db.query(`
                SELECT c.title, SUM(o.order_price) AS order_price, SUM(o.order_amount) AS order_amount
                    FROM categories as c
                JOIN products as p ON c.id = p.category
                JOIN orders as o ON p.id = o.product_id
                WHERE o.status = 1 AND o.order_created_at BETWEEN ? AND ?
                GROUP BY c.id
            `, [lastMonth, currentDate])
            const workbook = new ExcelJS.Workbook()
            const worksheet = workbook.addWorksheet('Category Orders')
            worksheet.addRow(['دسته بندی', 'میزان فروش', 'تعداد فروش'])
            res.forEach(item => {
                worksheet.addRow([
                    item.title,
                    item.order_price,
                    item.order_amount,
                ])
            });

            const path = `./src/fq2/q9/${(new Date().getTime())}.csv`
            await workbook.csv.writeFile(path)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const orderProductCategory = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default orderProductCategory