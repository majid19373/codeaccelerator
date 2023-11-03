import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const res = await db.query(`SELECT * FROM users WHERE email_address LIKE '%@gmail.com'`)
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const gmailUsers = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}


export default gmailUsers