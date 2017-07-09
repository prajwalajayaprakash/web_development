var button = document.querySelector("button");
var body = document.querySelector("body");
button.addEventListener("click", changeBackground);
var isPink = false;

function changeBackground(){
	if(isPink){
		body.style.background = "white";
			}
	else {
	body.style.background = "pink";
		}
	isPink = !isPink;
}
