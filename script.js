const	buttons = document.querySelectorAll(".button");
const	operator = document.querySelectorAll(".operator");
const	equal = document.querySelector("#equal");
const	clear = document.querySelector("#clear");
const	digits = document.querySelector("#digits");
const	float = document.querySelector(".float");

let		number1;
let		number2 = 0;
let		operand = "";
let 	flag = 0;
let		result = 0;
let		floatflag = 0;

function upDateScreen(button){
	if (digits.textContent == 0 || flag || result){
		digits.textContent = "";
	}
	if (digits.textContent.length < 16){
			digits.textContent += button.textContent;
		console.log(typeof digits.textContent);
		flag = 0;
	}	
}

float.addEventListener("click", function (){
	if (!floatflag){
		digits.textContent += ".";
		floatflag = 1;
	}
});

buttons.forEach((button) =>{
	if (button.classList.length === 1){
		button.addEventListener("click", function () {
			upDateScreen(this);
		});
	}
});

operator.forEach((button) =>{
		button.addEventListener("click", function () {
			if (!operand){
				if (number1 === 0){
					number1 = parseFloat(digits.textContent);
				}
				clearBackground();
				operand = button.textContent;
				button.style.backgroundColor = "rgb(255, 214, 137)";
				flag = 1;
			}
		});
});

equal.addEventListener("click", function () {
	if (number2 === 0){
		number2 = parseFloat(digits.textContent);
	}
		if (operand){
			if (operand === "x"){
				result = number1 * number2;
			}
			else if (operand === "/"){
				result = number1 / number2;
			}
			else if (operand === "-"){
				result = number1 - number2;
			}
			else if (operand === "+"){
				result = number1 + number2;
			}
		if (floatflag){
			digits.textContent = parseFloat(result.toFixed(4));
		}
		else{
			digits.textContent = result;
		}
		number1 = 0;
		number2 = 0;
		operand = "";
		flag = 0;
		floatflag = 0;
		clearBackground();
		}
});

clear.addEventListener("click", function () {
	number1 = 0;
	number2 = 0;
	operand = "";
	result = 0;
	flag = 0;
	floatflag = 0;
	digits.textContent = result;
	clearBackground();
});

function clearBackground(){
	operator.forEach((button) =>{
		button.style.backgroundColor = "orange";
	});
}