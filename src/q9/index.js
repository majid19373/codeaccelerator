import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const dataCount = () => {
    console.log('\n')
    fs.readFile('./src/q9/text.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }
        let letters = 0
        const lettersSplit = data.split('')
        lettersSplit.forEach(item => {
            if(/^[A-Za-z]+$/.test(item)) letters++
        })

        const words = data.split(' ')
        
        const spaces = data.match(/\s+/g)

        term('Words: ' + words.length + '\n')
        term('Letters: ' + letters + '\n')
        term('Spaces: ' + spaces.length + '\n')

        process.exit()
    })
}

export default dataCount