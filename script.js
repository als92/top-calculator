const numbers = document.querySelectorAll(".num");
const displayCurrent = document.querySelector(".current");
const displayPrevious = document.querySelector(".previous");
const clear = document.querySelector(".operator-clear");
const operators = document.querySelectorAll("[data-operator]");
const equality = document.querySelector("[data-equal]");
let secondOperand = "";
let firstOperand = "";
let operationSign = "";
let lastSecond = "";
let pastResult = null;

function clearCalc() {
	secondOperand = "";
	firstOperand = "";
	operationSign = "";
	displayCurrent.innerText = "";
}

clear.addEventListener("click", clearCalc);

function numberLogic(ev) {
	if (!operationSign) {
		firstOperand += ev.target.innerText;
		displayCurrent.innerText += ev.target.innerText;
	} else {
		secondOperand += ev.target.innerText;
		displayCurrent.innerText += ev.target.innerText;
	}
}

function operatorLogic(ev) {
	if (!secondOperand) {
		operationSign = ev.target.innerText;
		displayCurrent.innerText += operationSign;
	}

	if (secondOperand) {
		firstOperand = operate(operationSign, firstOperand, secondOperand);
		secondOperand = "";
		operationSign = ev.target.innerText;
		displayCurrent.innerText = firstOperand + operationSign;
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", numberLogic);
});

operators.forEach((operator) => {
	operator.addEventListener("click", operatorLogic);
});

equality.addEventListener("click", (ev) => {
	if (firstOperand && secondOperand) {
		firstOperand = operate(operationSign, firstOperand, secondOperand);
		secondOperand = "";
		operationSign = "";
		displayCurrent.innerText = firstOperand;
	}
});

function add(n1, n2) {
	return parseFloat(n1) + parseFloat(n2);
}

function subtract(n1, n2) {
	return parseFloat(n1) - parseFloat(n2);
}

function multiply(n1, n2) {
	return parseFloat(n1) * parseFloat(n2);
}

function divide(n1, n2) {
	return (parseFloat(n1) / parseFloat(n2)).toFixed(2);
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
