import { format } from 'date-fns'
import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
            let lastMonth = new Date()
            lastMonth.setMonth(lastMonth.getMonth() - 3)
            lastMonth = format(lastMonth, 'yyyy-MM-dd HH:mm:ss')
            const res = await db.query(`
                SELECT products.* FROM products
                LEFT JOIN comments 
                ON comments.product_id = products.id
                WHERE comments.created_at BETWEEN '${lastMonth}' AND '${currentDate}'
                GROUP BY products.id
                HAVING COUNT(products.id) > 2
            `)
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const productsComment = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default productsComment