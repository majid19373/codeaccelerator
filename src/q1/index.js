import terminal from 'terminal-kit'
const term = terminal.terminal

const countingCharacters = () => {
    term.cyan( 'Please enter your text: ' )

    term.inputField(( error , input ) => {
        console.log('\n')
        let numbers = 0
        let alphabets = 0
        let characters = 0
        const text = input.split('')
        
        text.forEach((item) => {
            if(/^[A-Za-z]+$/.test(item)) alphabets++
            else if(/^[0-9]+$/.test(item)) numbers++
            else characters++
        })
        term.red(`Numbers: ${numbers}\n`)
        term(`Alpha: ${alphabets}\n`)
        term.blue(`Characters: ${characters}\n`)
        process.exit()
    })
}

export default countingCharacters