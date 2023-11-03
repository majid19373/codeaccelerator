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
import calcGPA from './src/q11/index.js'
import userJsonFile from './src/q12/index.js'
import shopCategory from './src/q13/index.js'
import userStatus from './src/q14/index.js'
import displayProducts from './src/q15/index.js'
import bestCandidate from './src/q16/index.js'

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
	'11. Creating files for students and calculating their GPA',
	'12. Convert user information to JSON file',
	'13. Classification of shops according to their type',
	'14. Filter users by status',
	'15. Display product prices with their discounts',
	'16. Finding the best candidate for a job opportunity',
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
	calcGPA,
	userJsonFile,
	shopCategory,
	userStatus,
	displayProducts,
	bestCandidate,
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