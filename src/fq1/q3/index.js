import terminal from 'terminal-kit'
const term = terminal.terminal

const countUpperLowerCase = () => {
    term.cyan( 'Please enter your text: ' )

    term.inputField(( error , input ) => {
        console.log('\n')
        let uppercaseText = 0
        let lowercaseText = 0
        const text = input.split('')
        


        text.forEach((item) => {
            if(/^[a-z]+$/.test(item)) lowercaseText++
            else if(/^[A-Z]+$/.test(item)) uppercaseText++
        })
        term.red(`Lowercase: ${lowercaseText}\n`)
        term.blue(`Uppercase: ${uppercaseText}\n`)
        process.exit()
    })
}

export default countUpperLowerCase