import terminal from 'terminal-kit'
import countingCharacters from './src/q1/index.js'
import reverseText from './src/q2/index.js'
import countUpperLowerCase from './src/q3/index.js'
import textFileAndWords from './src/q4/index.js'

const term = terminal.terminal

term.cyan( 'Choose a project.\n' )

const items = [
	'1. Counting characters and numbers' ,
	'2. Display a string of letters in reverse' ,
	'3. Count the number of uppercase and lowercase letters' ,
	'4. Text file and its words' ,
]

const projects = [
    countingCharacters,
	reverseText,
	countUpperLowerCase,
	textFileAndWords,
]

const consoleRun = (index) => {
	if(typeof projects[index] !== 'undefined' && typeof projects[index] === 'function') {
		projects[index]()
	}else{
		term.red('A problem has occurred.')
		process.exit()
	}
}

term.singleColumnMenu( items , ( error , response ) => {
	term( '\n' ).eraseLineAfter(
		consoleRun(response.selectedIndex)
	)
}) 