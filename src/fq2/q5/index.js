import { format } from 'date-fns'
import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
            let lastMonth = new Date()
            lastMonth.setMonth(lastMonth.getMonth() - 1)
            lastMonth = format(lastMonth, 'yyyy-MM-dd HH:mm:ss')
            const res = await db.query(`
                SELECT users.* FROM users
                LEFT JOIN orders 
                ON orders.user_id = users.id
                WHERE orders.order_created_at NOT BETWEEN ? AND ?
            `, [lastMonth, currentDate])
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const userDontOrder = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default userDontOrder