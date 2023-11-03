import mysql from 'mysql2'

class MySQLDatabase {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'codeaccelerator',
        })
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err)
                return;
            }
            console.log('Connected to the MySQL database')
        })
    }

    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (err, results) => {
            if (err) {
                console.error('Error executing query:', err)
                reject(err);
            } else {
                resolve(results)
            }
            })
        })
    }

    close() {
        this.connection.end((err) => {
            if (err) {
                console.error('Error closing the database connection:', err)
                return
            }
            console.log('Connection closed.')
        })
    }
}

export default MySQLDatabase

