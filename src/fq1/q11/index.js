import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const calc = async(number) => {
    return new Promise((resolve, reject) => {
        term.cyan(`Lesson ${number}: `)
        term.inputField(( error1 , input ) => {
            console.log('\n')
            if (error1) {
                console.error(error1)
                process.exit()
            }
            resolve(Number(input))
        })
    })
}

const gpa = async() => {
    return new Promise(async (resolve, reject) => {
        let sum = 0
        let text = ''
        for(let i = 1; i <= 5; i++){
            const res = await calc(i)
            text += `Lesson ${i}: ${res}\n`
            sum += res
        }
        text += `GPA: ${sum/5}` 
        const path = `./src/fq1/q11/${(new Date().getTime())}.txt`
        fs.writeFile(path, text, (err) => {
            if(err){
                console.log(err)
            }else{
                term.green('The grade point average of the student was considered.\n')
            }
            resolve()
        })
    })
}

const calcGPA = async () => {
    await gpa()
    await gpa()
    process.exit()
}

export default calcGPA