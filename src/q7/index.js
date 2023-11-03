import terminal from 'terminal-kit'
const term = terminal.terminal

const calcDays = () => {
    term.cyan( 'Please enter your date (YYYY/MM/DD):  ' )
    term.inputField(( error , input ) => {
        console.log('\n')
        if(error) {
            console.log(error)
            process.exit()
        }

        const timeDifference = new Date() - new Date(input)
        const millisecondsInADay = 24 * 60 * 60 * 1000
        const daysDifference = Math.round(timeDifference / millisecondsInADay)

        if(daysDifference > 0){
            term(`Last ${daysDifference} days`)
        }else if(daysDifference < 0){
            term(`${Math.abs(daysDifference)} days left`)
        }else{
            term(`You have selected today's date.`)
        }

        process.exit()
    })
}

export default calcDays