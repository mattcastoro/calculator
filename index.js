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

// completes the math operations //
function operate(operator, firstValue, secondValue) {
    switch (operator) {
        case "+" :
            document.getElementById("inputDisplay").value = 
            calcSum(Number(firstValue), Number(secondValue));
            break;
        case "-" :
            document.getElementById("inputDisplay").value = 
            calcDifference(Number(firstValue), Number(secondValue));
            break;
        case "*" :
            document.getElementById("inputDisplay").value = 
            calcProduct(Number(firstValue), Number(secondValue));
            break;
        case "/" :
            document.getElementById("inputDisplay").value = 
            calcDivision(Number(firstValue), Number(secondValue));
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

const myBtnOp = document.querySelectorAll(".btnOp");
myBtnOp.forEach((btn) => {
    btn.addEventListener("click", () => {
        firstValue = document.getElementById("inputDisplay").value;
        operator = btn.value;
        getSecondValue();
    });
});

function getSecondValue() {
    clearInputDisplay();
    const myBtnEquals = document.querySelector("#btnEquals");
    myBtnEquals.onclick = function() {
        secondValue = document.getElementById("inputDisplay").value;
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