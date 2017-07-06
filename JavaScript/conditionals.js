var age =prompt("Please enter your age");
if (age<0){
	alert("You aren't born yet!");
}

if (age===21){
	alert("Happy 21st birthday!");
}

if(age%2 !==0){
	alert("Your age is odd!");
}
if(age%Math.sqrt(age)===0){
	alert("Your age is a perfect square!");
}