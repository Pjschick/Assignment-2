let whatLang = prompt('What is your language es, de, en, or fr?');

if (whatLang === "es") {
	document.write('Hello World translated in Spanish is: Hola Mundo');
}
else if  (whatLang === "de") {
	document.write('Hello World translated in German is: Hallo Welt');
}
else if  (whatLang === "en") {
	document.write('Hello World');
}
else if  (whatLang === "fr") {
	document.write('Hello World translated in French is: Bonjour le monde');
}
else {
	document.write('Hello World');
}
