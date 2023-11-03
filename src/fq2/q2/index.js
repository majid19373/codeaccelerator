import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const avg = await db.query('SELECT AVG(price) as avg FROM products')
            console.log(avg)
            const min = await db.query('SELECT MIN(price) as min FROM products')
            console.log(min)
            const max = await db.query('SELECT MAX(price) as min FROM products')
            console.log(max)
            const maxDiscount = await db.query('SELECT MIN(sale_price) as max_discount FROM products')
            console.log(maxDiscount)
            const minDiscount = await db.query('SELECT MAX(sale_price) as min_discount FROM products')
            console.log(minDiscount)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const aggregateProduct = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default aggregateProduct