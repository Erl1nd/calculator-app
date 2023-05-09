// Screen
const userInput = document.querySelector(".user-input-screen");
const resultOutput = document.querySelector(".result-output-screen");

// Button
const acBtn = document.querySelector(".ac-button");
const deleteBtn = document.querySelector(".delete-button");
const numberBtn = document.querySelectorAll(".number-button div");
const addBtn = document.querySelector(".add-button");
const subtractBtn = document.querySelector(".subtract-button");
const multiplyBtn = document.querySelector(".multiply-button");
const dividBtn = document.querySelector(".divide-button");
const decimalBtn = document.querySelector(".decimal-button");
const equalsBtn = document.querySelector(".equals-button");


let firstNumber;
let secondNumber;
let operator;
let numberContainer = []
let answer;


// AC
acBtn.addEventListener("click", function(){
    userInput.textContent = "";
    resultOutput.textContent = "";
    numberContainer = [];
    answer = 0;
    addBtn.removeAttribute("disabled")
})

// Number
numberBtn.forEach(button => {
    button.addEventListener("click", function(){
        userInput.textContent += this.textContent;
        resultOutput.textContent += this.textContent;
    })
});





// Add
addBtn.addEventListener("click", function(){
    userInput.textContent += " + ";
    if (firstNumber == null || secondNumber == null) {
        numberContainer.push(parseInt(resultOutput.textContent))
        resultOutput.textContent = "";
        if (numberContainer.length == 2) {
            answer = numberContainer[0] + numberContainer[1];
            numberContainer = [];
            numberContainer.push(answer);
        }
    } 
    console.log(numberContainer);
})




// EQUALS: give answer
equalsBtn.addEventListener("click", function(){
    answer = add(numberContainer[0], parseInt(resultOutput.textContent));
    resultOutput.textContent = answer;
    addBtn.setAttribute("disabled", "");
})


function add(a, b) {
    return a + b;
}