const defaultResult = 0;
let currentResult = defaultResult;
let calc = `${defaultResult} + 10`;
currentResult += 10;

addBtn.addEventListener('click', add);

function add() {
  currentResult += parseInt(userInput.value);
  outputResult(currentResult);
}
