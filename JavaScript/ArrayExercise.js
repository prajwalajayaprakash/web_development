var action = prompt("Which function do you want to perform?");
if (action=== "1"){
	printReverse();
}
else if (action === "2"){
	isUniform();
}
else if (action === "3"){
	sumArray();
}
else if (action === "4"){
	max();
}

//printReverse()
function printReverse(){
var array1 = [];
var reverse =[];
var input = prompt("Enter an array element. Please enter DONE when finished");
while(input!=="DONE"){
	array1.push(input);
	console.log(array1);
	input = prompt("Enter an array element");
}
while(array1.length>0){
	var output = array1.pop();
	reverse.push(output);
	console.log(reverse);
}
alert("The elements you entered, in reverse order : " + reverse);
}

//isUniform()
function isUniform(){
	var others = [];
	var input = prompt("Enter an array element. Please enter DONE when finished");
	var firstElement = input;
	var checkElement = true;
	while(input !== "DONE"){
		others.push(input);
		if(input===firstElement){
			checkElement = true;
		}
		else{
			checkElement = false;
		}
		input = prompt("Enter an array element. Please enter DONE when finished");
	}
	if(checkElement===true){
		alert("Array is Uniform");
	}	
	else{
		alert("Array is not Uniform");
	}
}

//sumArray()
function sumArray(){
	var sum = 0;
	var input = prompt("Enter an array element. Please enter DONE when finished");
	while(input!=="DONE"){
		sum += Number(input);
		input = prompt("Enter an array element. Please enter DONE when finished");
	}
	alert("The sum of elements is " + sum);
}

//max()
function max(){
	var input = prompt("Enter an array element. Please enter DONE when finished.");
	var maxValue = Number(input);
	while(input!=="DONE"){
		if(input>maxValue){
			maxValue = Number(input);
		}
		input = prompt("Enter an array element. Please enter DONE when finished.");
	}
	alert("The max value is : " + maxValue);
}
