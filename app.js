import {
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
    csvFile,
    exployeeDir
} from './src/fq1/index.js'

import terminal from 'terminal-kit'

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
	'17. Convert the list of products to an Excel file',
	'18. Create a directory for employee files',
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
	csvFile,
	exployeeDir,
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