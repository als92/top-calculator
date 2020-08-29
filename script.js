const numbers = document.querySelectorAll(".num");
const displayCurrent = document.querySelector(".current");
const displayPrevious = document.querySelector(".previous");
const clear = document.querySelector(".operator-clear");
const operators = document.querySelectorAll("[data-operator]");
const equality = document.querySelector("[data-equal]");
let secondOperand = "";
let firstOperand = "";
let operationSign = "";
let result = null;
let resultSign = "";

// const clearDisplay = function () {
// 	displayCurrent.innerText = "";
// 	secondOperand = "";
// 	firstOperand = "";
// 	operationSign = "";
// 	tempResult = 0;
// };

// let result = function () {
// 	if (tempResult === 0) {
// 		displayCurrent.innerText = operate(
// 			operationSign,
// 			firstOperand,
// 			secondOperand
// 		);
// 	}
// 	tempResult = +displayCurrent.innerText;
// 	tempRes;
// };

// equality.addEventListener("click", result);

// numbers.forEach((number) => {
// 	number.addEventListener("click", (ev) => {
// 		displayCurrent.innerText += ev.target.innerText;
// 		secondOperand += ev.target.innerText;
// 	});
// });
// operators.forEach((operator) => {
// 	operator.addEventListener("click", (ev) => {
// 		firstOperand = displayCurrent.innerText;
// 		displayCurrent.innerText += ev.target.innerText;
// 		operationSign += ev.target.innerText;
// 		secondOperand = "";
// 	});
// });

// clear.addEventListener("click", clearDisplay);

function add(n1, n2) {
	return parseInt(n1) + parseInt(n2);
}

function subtract(n1, n2) {
	return parseInt(n1) - parseInt(n2);
}

function multiply(n1, n2) {
	return parseInt(n1) * parseInt(n2);
}

function divide(n1, n2) {
	return parseInt(n1) / parseInt(n2);
}

function operate(operator, n1, n2) {
	if (operator === "+") {
		return add(n1, n2);
	} else if (operator === "-") {
		return subtract(n1, n2);
	} else if (operator === "*") {
		return multiply(n1, n2);
	} else if (operator === "/") {
		return divide(n1, n2);
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (ev) => {
		if (operationSign.length === 0) {
			displayCurrent.innerText += ev.target.innerText;
			firstOperand = displayCurrent.innerText;
		} else if (operationSign.length > 0 && result === null) {
			displayCurrent.innerText += ev.target.innerText;
			secondOperand += parseInt(ev.target.innerText);
			console.log(secondOperand);
		} else if (result !== null) {
			displayCurrent.innerText += ev.target.innerText;
			result += parseInt(ev.target.innerText);
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (ev) => {
		if (firstOperand.length === 0) return;
		operationSign = ev.target.innerText;
		displayCurrent.innerText += operationSign;
	});
});

function showResult(ev) {
	resultSign = ev.target.innerText;
	if (result === null) {
		result = operate(operationSign, firstOperand, secondOperand);
		displayCurrent.innerText = result;
	} else if (result && resultSign !== "") {
		result = operate(operationSign, result, secondOperand);
		displayCurrent.innerText = result;
	}
}

equality.addEventListener("click", showResult);
