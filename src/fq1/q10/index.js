import terminal from 'terminal-kit'
const term = terminal.terminal

const getInput = (text) => {
    return new Promise((resolve, reject) => {
        term.cyan(text)
        term.inputField(( error , input ) => {
            console.log('\n')
            if (error) {
                console.error(error)
                process.exit()
            }
            resolve(Number(input))
        })
    })
}

const finalPrice = async() => {
    const price = await getInput('Please enter your price: ')
    const discount = await getInput('Please enter your discount percent: ')
    const finalPrice = price - (price * discount / 100)

    term(`Orginal price: ${price}\n`)
    term.red(`Discount percentage: ${discount}\n`)
    term.green(`Final price: ${finalPrice}\n`)
    
    process.exit()

}

export default finalPrice