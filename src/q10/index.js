import terminal from 'terminal-kit'
const term = terminal.terminal

const finalPrice = () => {
    term.cyan( 'Please enter your price: ' )
    term.inputField(( error , price ) => {
        console.log('\n')
        if (error) {
            console.error(error)
            process.exit()
        }
        term.cyan( 'Please enter your discount percent: ' )
        term.inputField(( err , discount ) => {
            if (err) {
                console.error(err)
                process.exit()
            }
            console.log('\n')

            const finalPrice = price - (price * discount / 100)

            term(`Orginal price: ${price}\n`)
            term.red(`Discount percentage: ${discount}\n`)
            term.green(`Final price: ${finalPrice}\n`)
            process.exit()
        })
    })

}

export default finalPrice