import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const userStatus = () => {
    fs.readFile('./src/q14/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const users = JSON.parse(data)
        const activeUsers = users.filter(user => user.is_active)
        const inactiveUsers = users.filter(user => !user.is_active)

        term.green(`Active: ${activeUsers.length}\n`)
        term.red(`Inactive: ${inactiveUsers.length}`)

        process.exit()

    })
}

export default userStatus