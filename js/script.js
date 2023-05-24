// Screen
const userInput = document.querySelector(".user-input-screen");
const resultOutput = document.querySelector(".result-output-screen");

// Button
const acBtn = document.querySelector(".ac-button");
const numberBtn = document.querySelectorAll(".number-button div");
const decimalBtn = document.querySelector(".decimal-button");
const equalsBtn = document.querySelector(".equals-button");
const operatorBtn = document.querySelectorAll(".operator div")

let firstOperand = 0;
let secondOperand = 0;
let operator = null;
let screenReset = false;

equalsBtn.addEventListener("click", () => evaluate());

numberBtn.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
)

acBtn.addEventListener("click", () => clearCalculator());


// Basic Math
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Append Number
function appendNumber(number) {
    if (screenReset) {
        clearResult();
    }
    resultOutput.textContent += number;
}

// Set Operator
function setOperator(op) {
    if (operator != null) {
        evaluate();
    }
    firstOperand = resultOutput.textContent
    operator = op;
    userInput.textContent = `${firstOperand} ${operator}`;
    screenReset = true;
}


// Clear Result Output
function clearResult(){
    resultOutput.textContent = "";
    screenReset = false;
}

// Evaluate
function evaluate(){
    if (operator === null) return
    if (operator == "/" && resultOutput.textContent == "0") {
        alert("Can't Divide");
        return
    }
    
    secondOperand = resultOutput.textContent;
    resultOutput.textContent = operate(operator, firstOperand, secondOperand);
    userInput.textContent = operate(operator, firstOperand, secondOperand);
    operator = null;
}

// Operate
function operate(operator, a, b){
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b)
            break;

        case "-":
            return subtract(a, b)
            break;

        case "x":
            return multiply(a, b)
            break;

        case "/":
            if (b === 0) return null
            else divide(a, b)
            break;

        default:
            return null
            break;
    }
}

function clearCalculator() {
    screenReset = false;
    resultOutput.textContent = "";
    userInput.textContent = "";
    firstOperand = 0;
    secondOperand = 0;
}
