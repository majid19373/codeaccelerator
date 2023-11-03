import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const res = await db.query(`SELECT * FROM orders ORDER BY status ASC`)
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const orderStatus = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default orderStatus