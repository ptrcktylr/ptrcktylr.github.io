const formulaDisplay = document.querySelector("#formula");
const resultDisplay = document.querySelector("#result");

let formula = "";
let result = "";

const number_buttons = [...document.querySelectorAll(".num-btn, .span-two")];
number_buttons.forEach(num_button => {
    num_button.onclick = function() {
        updateResult(num_button.id);
    };
})

const operation_buttons = [...document.querySelectorAll(".op-btn")];
operation_buttons.forEach(operation_button => {
    operation_button.onclick = function() {
        updateFormula(result, operation_button.textContent);
    }
})

function updateResult(input) {
    if (resultDisplay.textContent.length < 12) {
        result += input;
        resultDisplay.textContent = result;
    }
}

function updateFormula(input, op) {
    if (input === "" || input === "." || input === "-") return;

    if (formula !== "") {
        equals();
        formula = result + " " + op;
        formulaDisplay.textContent = formula;
        result = "";
        resultDisplay.textContent = result;

        return;
    }


    formula = input + " " + op;
    result = "";
    formulaDisplay.textContent = formula;
    resultDisplay.textContent = result;
}

function equals() { // equals button

    let args = formula.split(" ");

    if (args.length !== 2) return; // if no operator and equals is presed return
    if (result === "" || result === "." || result === "-") return; // if result empty return

    let answer = operate(args[0], result, args[1]);
    answer = Math.round(answer * 10000000000) / 10000000000; // round 10 decimal places

    resultDisplay.textContent = answer;
    result = answer
    formula = "";
    formulaDisplay.textContent = formula;
}

function operate(num1, num2, operation) { 
    switch (operation) {
        case "÷":
            return divide(num1, num2);
        case "+":
            return add(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "-":
            return subtract(num1, num2);
        default:
            return;
    }
}

function clearDisplay() { // AC button
    result = "";
    formula = "";
    formulaDisplay.textContent = "";
    resultDisplay.textContent = "";
}

function del() {
    result += '';
    result = result.slice(0, result.length-1);
    resultDisplay.textContent = result;

    if (result === "-") {
        result = "";
        resultDisplay.textContent = result;
    }
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    if (num2 === 0) return "Error";
    return num1 / num2;
}

function decimal() {
    result += '';
    if (!result.includes(".")) result += ".";
    resultDisplay.textContent = result;
}

function negate() {
    if (result === "") return;
    result = result * -1;
    resultDisplay.textContent = result;
}

document.querySelector("#clear").onclick = function() {
    clearDisplay();
};

document.querySelector('#delete').onclick = function() {
    del();
};

document.querySelector('#negate').onclick = function() {
    negate();
};

document.querySelector('#decimal').onclick = function() {
    decimal();
};

document.querySelector('#equal').onclick = function () {
    equals();
};