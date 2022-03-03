
let grade = parseInt(prompt("Enter a grade between 1 and 100"))
if (grade > 100) {
	prompt('You did not enter a grade between 1 and 100. Please enter a number between 1 and 100');
} else if (grade >= 90) {
	console.log('You received an A');
} else if (grade >= 80) {
	console.log('You received a B');
} else if (grade >= 70) {
	console.log('You received a C');
} else if (grade >= 60) {
	console.log('You received a D');
} else {
	console.log('You received an F');
}

