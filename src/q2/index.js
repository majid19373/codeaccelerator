import terminal from 'terminal-kit'
const term = terminal.terminal

const reverseString = () => {
    term.cyan( 'Please enter your text: ' )
    term.inputField(( error , input ) => {
        console.log('\n')
        const text = input.split('')
        
        text.reverse()
        const joinText = text.join('')

        term.red(`Input: ${input}\n`)
        term.blue(`Reverse: ${joinText}\n`)
        
        process.exit()
    })
}

export default reverseString