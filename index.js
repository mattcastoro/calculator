// basic math functions for adding, subtracting, multiplying, and division //
function calcSum(a, b) {
    return a + b;
}

function calcDifference(a, b) {
    return a - b;
}

function calcProduct(a, b) {
    return a * b;
}

function calcDivision(a, b) {
    return a / b;
}

// declared global variables to store values for math operations //
let firstValue;
let operator;
let secondValue;
// let firstValueCleaned;
// let secondValueCleaned;

// completes the math operations //
function operate(operator, firstValue, secondValue) {
    let firstValueCleaned = Number(firstValue);
    let secondValueCleaned = Number(secondValue);
    switch (operator) {
        case "+" :
            document.getElementById("inputDisplay").value = calcSum(firstValueCleaned, secondValueCleaned);
            console.log(`total(${calcSum(firstValueCleaned, secondValueCleaned)})`)
            break;
        case "-" :
            document.getElementById("inputDisplay").value = calcDifference(firstValueCleaned, secondValueCleaned);
            console.log(`total(${calcDifference(firstValueCleaned, secondValueCleaned)})`)
            break;
        case "*" :
            document.getElementById("inputDisplay").value = calcProduct(firstValueCleaned, secondValueCleaned);
            console.log(`total(${calcProduct(firstValueCleaned, secondValueCleaned)})`)
            break;
        case "/" :
            document.getElementById("inputDisplay").value = calcDivision(firstValueCleaned, secondValueCleaned);
            console.log(`total(${calcDivision(firstValueCleaned, secondValueCleaned)})`)
            break;
    }
}

// displays value based on the number keys a user clicks //
document.addEventListener("DOMContentLoaded", function() {
    let textBox = document.querySelector("#inputDisplay");
    let myButtons = document.querySelectorAll(".btn");

    myButtons.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            textBox.value += this.value;
        });
    });
});

// stores operator and current display values upon given operator being clicked by user //
const myBtnOp = document.querySelectorAll(".btnOp");
myBtnOp.forEach((btn) => {
    btn.addEventListener("click", () => {
       firstValue = document.getElementById("inputDisplay").value;
       console.log(`firstValue(${firstValue})`)
       operator = btn.value;
       console.log(`operator(${operator})`)
       getsecondValue();
    });
});

// clears input display, stores secondValue, then calls operate function //
function getsecondValue() {
    clearInputDisplay();
    const myBtnEquals = document.querySelector("#btnEquals");
    myBtnEquals.onclick = function() {
        console.log("Equal was clicked");
        secondValue = document.getElementById("inputDisplay").value;
        console.log(`secondValue(${secondValue})`)
        console.log(`operator(${operator}) firstValue(${firstValue}) secondValue(${secondValue})`)
        operate(operator, firstValue, secondValue);
    };
}

// clears input display //
function clearInputDisplay() {
    document.getElementById("inputDisplay").value="";
}

// reloads page to clear global variables and the input display //
function resetPage() {
    window.location.reload();
}