const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  return currentResult + userInput.value;
}

addBtn.addEventListener("click", add);
