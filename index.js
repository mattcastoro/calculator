// GLOBAL VARIABLES to store values for OPERATION HANDLER //
let firstValue = "";
let secondValue = "";
let operator;
let previousOperator;
let result;
let operatorList = ["+", "-", "*", "/"];
let fullOperatorList = ["+", "-", "*", "/", "="];
let lastButtonClicked;

// OPERATION HANDLER for adding, subtracting, multiplying, and division //
function calcSum(a, b) {
    result = a + b;
    return parseFloat(result.toFixed(2))
}
function calcDifference(a, b) {
    result = a - b;
    return parseFloat(result.toFixed(2))
}
function calcProduct(a, b) {
    result = a * b;
    return parseFloat(result.toFixed(2))
}
function calcDivision(a, b) {
    result = a / b;
    return parseFloat(result.toFixed(2))
}

// EXPRESSION HANDLER to complete math calculation //
function operate(operator, firstValue, secondValue) {
    switch (operator) {
        case "+" :
            result = calcSum(Number(firstValue), Number(secondValue));
            document.getElementById("inputDisplay").value = result;
            break;
        case "-" :
            result = calcDifference(Number(firstValue), Number(secondValue));
            document.getElementById("inputDisplay").value = result;
            break;
        case "*" :
            result = calcProduct(Number(firstValue), Number(secondValue));
            document.getElementById("inputDisplay").value = result;
            break;
        case "/" :
            result = calcDivision(Number(firstValue), Number(secondValue));
            document.getElementById("inputDisplay").value = result;
            break;
    }
}

// DISPLAY HANDLER to display number values upon user clicks //
document.addEventListener("DOMContentLoaded", function() {
    let textBox = document.querySelector("#inputDisplay");
    let myButtons = document.querySelectorAll(".btn");

    myButtons.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            if(fullOperatorList.includes(lastButtonClicked)) {
                clearInputDisplay();
                textBox.value += this.value;
            } else {
                textBox.value += this.value;
            }
        });
    });
});

// LAST BUTTON LOG to store the value of the last clicked button //
document.addEventListener("DOMContentLoaded", function() {
    let myButtons = document.querySelectorAll("button");

    myButtons.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            lastButtonClicked = e.target.value;
        });
    });
});

// EVENT HANDLER to store operator clicks //
const myBtn = document.querySelectorAll(".btnOp");
let tempOpList = [];
myBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        tempOpList.unshift(e.target.value);
        operator = tempOpList[0];
        previousOperator = tempOpList[1];
        execute();
    })
});

// EXECUTION HANDLER to perform logical calculation setups //
function execute() {
    if (operatorList.includes(operator)) {
        if (document.getElementById("inputDisplay").value == "") {
            alert("Please enter a number before selecting a math operator");
            resetPage();
        } else if (firstValue == "") {
            firstValue = document.getElementById("inputDisplay").value;
        } else if (firstValue != "" && secondValue == "") {
            secondValue = document.getElementById("inputDisplay").value;
            operate(previousOperator, firstValue, secondValue);
            console.log(firstValue, previousOperator, secondValue, "equals", result);
        } else if (firstValue != "" && secondValue != "") {
            firstValue = result;
            secondValue = document.getElementById("inputDisplay").value;
            operate(previousOperator, firstValue, secondValue);
            console.log(firstValue, previousOperator, secondValue, "equals", result);
        }
    } else if (operator == "=") {
        if(document.getElementById("inputDisplay").value == "") {
            alert("Please select a number, math operator, and another number before selecting equals");
            resetPage();
        } else if (firstValue != "" && secondValue != "") {
            firstValue = result;
            secondValue = document.getElementById("inputDisplay").value;
            operate(previousOperator, firstValue, secondValue);
            console.log(firstValue, previousOperator, secondValue, "equals", result);
        } else {
            secondValue = document.getElementById("inputDisplay").value;
            operate(previousOperator, firstValue, secondValue);
            console.log(firstValue, previousOperator, secondValue, "equals", result);
        }

    }
}

// DISPLAY CLEARING HANDLER to clear input display //
function clearInputDisplay() {
    document.getElementById("inputDisplay").value="";
}

// RESET HANDLER to clear global variables and the input display //
function resetPage() {
    window.location.reload();
}