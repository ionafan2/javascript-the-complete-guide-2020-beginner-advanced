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
    let logEntry = {
        operation: 'ADD',
        prevResult: initialRes,
        number: parseInt(userInput.value),
        result: currentResult
    }
    console.log(logEntry.operation);
    logEntries.push(logEntry);
    console.log(logEntries);
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
