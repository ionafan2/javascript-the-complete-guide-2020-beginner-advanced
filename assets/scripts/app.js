const defaultResult = 0;
let currentResult = defaultResult;
let calc = `${defaultResult} + 10`;
currentResult += 10;

addBtn.addEventListener('click', add);

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const calcDesc = `${currentResult} + ${getUserInput()}`;
  currentResult += getUserInput();

  outputResult(currentResult, calcDesc);
}
