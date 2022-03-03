let num1 = prompt('Enter a number between 1 and 9');
let num2 = prompt('Enter a second number between 1 and 9');
if (num1 > num2) {
	document.write('The larger number is ' + num1);
}
else if  (num2>num1) {
document.write('The larger number is ' + num2);
}
else {
	document.write('Both numbers are equal');
}
