const numbers = document.querySelectorAll(".num");
const displayCurrent = document.querySelector(".current");
const clear = document.querySelector(".operator-clear");
const minusOperator = document.querySelector("[data-minus]");
const operator = document.querySelectorAll(".operator");

let currentOperand = "";

const clearDisplay = clear.addEventListener("click", (ev) => {
	displayCurrent.innerText = "";
});

let displayOperation = numbers.forEach((number) => {
	number.addEventListener("click", (ev) => {
		displayCurrent.innerText += ev.target.innerText;
	});
});

const saveCurrentOperand = operator.forEach((item) => {
	item.addEventListener("click", (ev) => {
		currentOperand = displayCurrent.innerText;
	});
});

minusOperator.addEventListener("click", () => {
	currentOperand += "-";
	displayOperation += "-";
	console.log(currentOperand);
});

function add(n1, n2) {
	return n1 + n2;
}

function subtract(n1, n2) {
	return n1 - n2;
}

function multiply(n1, n2) {
	return n1 * n2;
}

function divide(n1, n2) {
	return n1 / n2;
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
