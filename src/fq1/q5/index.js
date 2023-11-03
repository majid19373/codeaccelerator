import terminal from 'terminal-kit'
const term = terminal.terminal


const conditions = [2, 3, 5, 7] 

const isPrime = (number) => {
    for (const item of conditions) {
        if(item >= number){
            continue
        }
        if(number % item === 0){
            return false
        }
    }
    return true
}

const primeNumber = () => {
    term.cyan( 'Please enter your number: ' )
    term.inputField(( error , input ) => {
        console.log('\n')
        if(error) {
            console.log(error)
            process.exit()
        }
        const number = parseInt(input)
        if(!Number.isInteger(number)){
            term.red('The input is not a number.')
            process.exit()
        }
        const numbers = []
        if(number < 2){
            term.red('The input is not correct.')
            process.exit()
        }
        for(let i = 2; i <= number; i++) {
            if(isPrime(i)){
                numbers.push(i)
            }
        }
        
        term(`${numbers.join("-")}`)
        process.exit()
    })
}

export default primeNumber