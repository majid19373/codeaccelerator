import { format } from 'date-fns'
import Database  from '../../tools/MysqlConnection.js'

const info = () => {
    return new Promise(async(resolve, reject) => {
        const db = new Database()
        db.connect()
        try {
            const currentMonth = (new Date()).getMonth() + 1
            const res = await db.query(`
                SELECT * FROM users
                WHERE MONTH(birth_date) = ?
            `, [currentMonth])
            console.log(res)
        } catch (error) {
            console.error(error)
        }finally{
            db.close()
            resolve(true)
        }
    })
}

const userBorn = async() => {
    const res = await info()
    if(res){
        process.exit()
    }
}

export default userBorn