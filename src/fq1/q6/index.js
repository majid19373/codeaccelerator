import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const uniqueWords = () => {
    console.log('\n')
    fs.readFile('./src/fq1/q6/text.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }
        const text = data.toLowerCase()
        const splitText = text.split(' ')
        const words = []
        splitText.forEach(word => {
            if(!words.includes(word)){
                const count = text.split(word).length - 1
                if(count > 1){
                    words.push(word)
                    term(`${word}: ${count}\n`)
                }
            }
        })
        process.exit()
    })
    

}

export default uniqueWords