import terminal from 'terminal-kit'
const term = terminal.terminal

const secondDay = () => {
    console.log('\n')
    const today = new Date()
    today.setHours(0,0,0,0)
    const second = Math.round(today.getTime() / 1000)
    term(`The number of seconds since the beginning of today: ${second} seconds`)
    process.exit()
}

export default secondDay