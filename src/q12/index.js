import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const userFields = ['first_name', 'last_name', 'phone_number', 'email']

const userInformation = (text) => {
    return new Promise((resolve, reject) => {
        term.cyan(text + ': ')
        term.inputField((error, input) => {
            console.log('\n')
            resolve(input)
        })
    })
}

const createUser = async() => {
    let user = {}
    return new Promise(async(resolve, reject) => {
        for (const iterator of userFields) {
            const res = await userInformation(iterator)
            user = {...user, [iterator]: res }
        }
        resolve(user)
    })
}

const userJsonFile = async() => {
    const jsonFile = []
    for(let i = 0; i < 2; i++){
        const res = await createUser()
        jsonFile.push(res)
    }
    const path = `./src/q11/${(new Date().getTime())}.json`
    fs.writeFile(path, JSON.stringify(jsonFile), 'utf8', (err) => {
        if (err) {
            term.red(err);
        } else {
            term.green('JSON file created successfully.');
        }
        process.exit()
    })
}

export default userJsonFile