function isEven(num){
	if(number%2===0){
		return true;
	}
	else{
		return false;
	}
}

function factorial(num){
	var result =1;
	for(var i=2;i<=num;i++){
		result *= i;
	}
	return result;
}

function kebabToSnake(str){
	//replace - with _
	var newStr= str.replace(/-/g,"_");
	return newStr;
}
