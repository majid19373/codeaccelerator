import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const res = await db.query('SELECT full_name, phone_number FROM users')
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const displayUserInformation = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default displayUserInformation