const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorsList = ["+", "-", "*", "/"];

const operationContainer = document.querySelector(".operation");
const numbersContainer = document.querySelector(".numbers");
const operatorsContainer = document.querySelector(".operators");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
let operationString = "";

function createButton(content, container) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.innerHTML = content;
    container.append(button);
    button.addEventListener("click", function() {
        operationString += button.innerHTML;
        operationContainer.innerHTML = operationString;
    });
}

numbersList.forEach(number => createButton(number, numbersContainer));
operatorsList.forEach(operator => createButton(operator, operatorsContainer));

equal.addEventListener("click", function() {
    result = Number(eval(operationString).toFixed(2));
    operationContainer.innerHTML = operationString + " = " + result;
    operationString = result.toString();
});

clear.addEventListener("click", function() {
    operationString = "";
    operationContainer.innerHTML = operationString;
});