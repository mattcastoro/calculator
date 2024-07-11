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

let num1;
let operator;
let num2;

function operate(operator, num1, num2) {
    switch (operator) {
        case "+" :
            return calcSum(num1, num2);
            break;
        case "-" :
            return calcDifference(num1, num2);
            break;
        case "*" :
            return calcProduct(num1, num2);
            break;
        case "/" :
            return calcDivision(num1, num2);
    }
}
