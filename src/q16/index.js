import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const indicator = {
    intelligence: 5,
    general_information: 3,
    it: 4
} 

const bestCandidate = () => {
    fs.readFile('./src/q16/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const users = JSON.parse(data)

        let bestCandidate = {
            user: {},
            points: 0
        }

        users.forEach(item => {
            const intelligence = item.intelligence * indicator.intelligence
            const general_information = item.general_information * indicator.general_information
            const it = item.it * indicator.it

            const points = intelligence + it + general_information

            if(points >= bestCandidate.points){
                bestCandidate = {
                    user: item,
                    points: points
                }
            }
        });

        term(`The best candidate: ${bestCandidate.user.name}\n`)
        term.green(`Total score: ${bestCandidate.points}\n`)

        process.exit()

    })
}

export default bestCandidate