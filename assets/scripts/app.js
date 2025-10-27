const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);

function createAndWriteLog(operator, before, calcNumber) {
    return `${before} ${operator} ${calcNumber}`;
}

function add() {
    let initialRes = currentResult;
    currentResult += parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('+', initialRes, parseInt(userInput.value)));
    logEntries.push(parseInt(userInput.value))
    console.log(logEntries[0]);
}

function subtract() {
    let initialRes = currentResult;
    currentResult -= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('-', initialRes, parseInt(userInput.value)));
}

function divide() {
    let initialRes = currentResult;
    currentResult /= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('/', initialRes, parseInt(userInput.value)));
}

function multiply() {
    let initialRes = currentResult;
    currentResult *= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('/', initialRes, parseInt(userInput.value)));
}
