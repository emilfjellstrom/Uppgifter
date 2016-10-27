/*
var i = 10;

while (i >= 10) {

	if (i % 2 == 0) {

		console.log(i);
}
i--;
};
*/
/*
var monthNumber = 1;
var monthsToPrint = 12;
var numberOfSheep = 1;


/* Man behöver inte använda var i när man kör loopen. Man kan deklarera en variabel
utanför själva for(){} och använda den variabeln. I det här fallet är monthNumber = 1 (vår start,
monthsToPrint = 12 (vårt stopp) samt att vi måste öka vår räknare: monthsToPrint++ */
/*
for (monthNumber; monthNumber <= monthsToPrint; monthNumber++){
	/*Väl inne i loopen sker ökningen av själva fåren, multiplicerar det ursprungliga värdet
	med 4*/
/*
	numberOfSheep = numberOfSheep*4;
	/* Samt skriver ut variabeln numberOfSheep. Observera att när vi sätter ihop
	strängar och variabler/nummer måste vi använda + för att binda ihop dem */
/*
		console.log('There will be ' + numberOfSheep + ' sheeps after ' + monthNumber +' months(s)!');
}

*/
/*
for (var i = 0; i <= 10; i++){ console.log(i);}

function multiply(x,y){
	return x * y;
}

var multiplyAnswer = multiply(8,4);
console.log(multiplyAnswer);
*/
var n = 0;

while (n < 3) {
	console.log(n);
  n++;
}