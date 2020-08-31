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
let lastSecond = "";
let resultSign = "";

function clearCalc() {
	secondOperand = "";
	firstOperand = "";
	operationSign = "";
	result = null;
	resultSign = "";
	displayCurrent.innerText = "";
}

clear.addEventListener("click", clearCalc);

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

numbers.forEach((number) => {
	number.addEventListener("click", (ev) => {
		if (!secondOperand && !operationSign) {
			firstOperand += ev.target.innerText;
			displayCurrent.innerText += ev.target.innerText;
		} else {
			secondOperand += ev.target.innerText;
			displayCurrent.innerText += ev.target.innerText;
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (ev) => {
		if (firstOperand && secondOperand && operationSign) {
			resultato = operate(operationSign, firstOperand, secondOperand);
		}
		if (resultSign) {
			resultSign = "";
		}
		operationSign = ev.target.innerText;
		displayCurrent.innerText = firstOperand + operationSign;
	});
});

function showResult(ev) {
	if (resultSign === "") {
		firstOperand = operate(operationSign, firstOperand, secondOperand);
		displayCurrent.innerText = firstOperand;
		lastSecond = secondOperand;
		secondOperand = "";
		resultSign = "=";
	} else {
		firstOperand = operate(operationSign, firstOperand, lastSecond);
		displayCurrent.innerText = firstOperand;
		resultSign = "=";
	}
}

equality.addEventListener("click", showResult);
