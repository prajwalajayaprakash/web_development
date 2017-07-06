var ourNumber = 5;
var number = Number(prompt("Guess a number"));
if(number===ourNumber){
	alert("You guessed it right");
}
else if(number>ourNumber){
	alert("Too high!! Try again");
}
else{
	alert("Too low!! Try again");
}
