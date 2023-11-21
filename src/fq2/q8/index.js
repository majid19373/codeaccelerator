import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const res = await db.query(`
                SELECT 
                    YEAR(o.order_created_at) AS year, 
                    MONTH(o.order_created_at) AS month,  
                    p.* 
                FROM products AS p
                LEFT JOIN orders as o 
                    ON p.id = o.product_id
                WHERE o.status = 1
                GROUP BY YEAR(o.order_created_at), MONTH(o.order_created_at), p.id
                ORDER BY year, month, p.id
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

const monthlyOrder = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default monthlyOrder