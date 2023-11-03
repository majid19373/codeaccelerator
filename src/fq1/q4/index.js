import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const textFileAndWords = () => {
    console.log('\n')
    fs.readFile('./src/fq1/q4/text.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }
        const splitWords = data.split(' ')  
        
        const enterRegex = /(\r\n|\n)/g
        const lines = data.split(enterRegex)
        let countLines = 0
        lines.forEach(line => {
            const splitLine = line.trim().split(' ')
            if(splitLine.length >= 4) countLines++
        })
        term(`Words: ${splitWords.length} \n`)
        term.green(`Number of lines with more than 4 words: ${countLines}`)
        process.exit()
    })
}

export default textFileAndWords
