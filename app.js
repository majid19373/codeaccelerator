import terminal from 'terminal-kit'
import countingCharacters from './src/q1/index.js'
import reverseText from './src/q2/index.js'
import countUpperLowerCase from './src/q3/index.js'
import textFileAndWords from './src/q4/index.js'
import primeNumber from './src/q5/index.js'
import uniqueWords from './src/q6/index.js'
import calcDays from './src/q7/index.js'
import secondDay from './src/q8/index.js'
import dataCount from './src/q9/index.js'
import finalPrice from './src/q10/index.js'

const term = terminal.terminal

term.cyan( 'Choose a project.\n' )

const items = [
	'1. Counting characters and numbers',
	'2. Display a string of letters in reverse',
	'3. Count the number of uppercase and lowercase letters',
	'4. Text file and its words',
	'5. Prime Numbers',
	'6. Count the number of unique words',
	'7. Calculate the number of days from a specific date',
	'8. Calculate the seconds from the start of the day',
	'9. Data count of a text file',
	'10. Calculate the final price of a product',
]

const projects = [
    countingCharacters,
	reverseText,
	countUpperLowerCase,
	textFileAndWords,
	primeNumber,
	uniqueWords,
	calcDays,
	secondDay,
	dataCount,
	finalPrice,
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