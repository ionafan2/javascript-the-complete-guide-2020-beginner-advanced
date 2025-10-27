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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    let initialRes = currentResult;
    currentResult += parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('+', initialRes, parseInt(userInput.value)));
    writeToLog('ADD', initialRes, parseInt(userInput.value), currentResult);
}

function subtract() {
    let initialRes = currentResult;
    currentResult -= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('-', initialRes, parseInt(userInput.value)));
    writeToLog('SUBTRACT', initialRes, parseInt(userInput.value), currentResult);
}

function divide() {
    let initialRes = currentResult;
    currentResult /= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('/', initialRes, parseInt(userInput.value)));
    writeToLog('DIVIDE', initialRes, parseInt(userInput.value), currentResult);
}

function multiply() {
    let initialRes = currentResult;
    currentResult *= parseInt(userInput.value);
    outputResult(currentResult, createAndWriteLog('/', initialRes, parseInt(userInput.value)));
    writeToLog('MULTIPLY', initialRes, parseInt(userInput.value), currentResult);
}
