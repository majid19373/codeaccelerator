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

import {
	displayUserInformation,
	aggregateProduct,
} from './src/fq2/index.js'

import terminal from 'terminal-kit'

const term = terminal.terminal

term.cyan( 'Choose a project.\n' )

const items = [
	'q1-1. Counting characters and numbers',
	'q1-2. Display a string of letters in reverse',
	'q1-3. Count the number of uppercase and lowercase letters',
	'q1-4. Text file and its words',
	'q1-5. Prime Numbers',
	'q1-6. Count the number of unique words',
	'q1-7. Calculate the number of days from a specific date',
	'q1-8. Calculate the seconds from the start of the day',
	'q1-9. Data count of a text file',
	'q1-10. Calculate the final price of a product',
	'q1-11. Creating files for students and calculating their GPA',
	'q1-12. Convert user information to JSON file',
	'q1-13. Classification of shops according to their type',
	'q1-14. Filter users by status',
	'q1-15. Display product prices with their discounts',
	'q1-16. Finding the best candidate for a job opportunity',
	'q1-17. Convert the list of products to an Excel file',
	'q1-18. Create a directory for employee files',
	'q2-1. Display user information',
	'q2-2. Aggregate product data',
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
	displayUserInformation,
	aggregateProduct,
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