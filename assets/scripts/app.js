const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, before, calcNumber) {
  return `${before} ${operator} ${calcNumber}`;
}
Í;
function add() {
  let initialRes = currentResult;
  currentResult += getUserInput();
  outputResult(
    currentResult,
    createAndWriteLog('+', initialRes, getUserInput())
  );
}

function subtract() {
  let initialRes = currentResult;
  currentResult -= getUserInput();
  outputResult(
    currentResult,
    createAndWriteLog('-', initialRes, getUserInput())
  );
}

function divide() {
  let initialRes = currentResult;
  currentResult /= getUserInput();
  outputResult(
    currentResult,
    createAndWriteLog('/', initialRes, getUserInput())
  );
}

function multiply() {
  let initialRes = currentResult;
  currentResult *= getUserInput();
  outputResult(
    currentResult,
    createAndWriteLog('/', initialRes, getUserInput())
  );
}
