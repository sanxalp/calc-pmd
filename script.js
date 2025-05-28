//select display element
const display = document.getElementById("display");

//store current input
let currentInput = "";

//Append number 0-9
function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

// Append operator
function appendOperator(op) {
  if (currentInput === "") return; // Prevent starting with an operator

  const lastChar = currentInput.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    //replace last operator
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += op;
  updateDisplay();
}

//Add decimal
function appendDot() {
  //prevent multiple dots in a number
  const lastNumber = currentInput.split(/[\+\-\*\/%]/).pop();
  if (!lastNumber.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

//clear input and display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

//perform square operation
function square() {
  try {
    const result = eval(currentInput);
    currentInput = result * result; // square the result
    updateDisplay();
  } catch (err) {
    display.innerText = "Error";
  }
}

//evaluate expression
function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (err) {
    display.innerText = "Error";
  }
}

//update display
function updateDisplay() {
  display.innerText = currentInput === "" ? "0" : currentInput;
}
