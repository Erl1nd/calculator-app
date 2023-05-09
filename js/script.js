// Screen
const userInput = document.querySelector(".user-input-screen");
const resultOutput = document.querySelector(".result-output-screen");

// Button
const acBtn = document.querySelector(".ac-button");
const deleteBtn = document.querySelector(".delete-button");
const numberBtn = document.querySelectorAll(".number-button");
const addBtn = document.querySelector(".add-button");
const subtractBtn = document.querySelector(".subtract-button");
const multiplyBtn = document.querySelector(".multiply-button");
const dividBtn = document.querySelector(".divide-button");
const decimalBtn = document.querySelector(".decimal-button");







// AC(clear)
acBtn.addEventListener("click", function(){
    userInput.textContent = "";
})

// when clicking the number button
numberBtn.forEach(button => {
    button.addEventListener("click", function(){
        userInput.textContent += this.textContent;
    })
});