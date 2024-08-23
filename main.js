let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
  expression = '';
  display.value = '';
}

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendDot() {
  if (!expression.endsWith('.')) {
    expression += '.';
    display.value = expression;
  }
}

function appendOperator(op) {
  if (expression !== '') {
        // Prevents double operators
    if (!isNaN(expression[expression.length - 1])) {
      expression += op === '±' ? '-' : op;
      display.value = expression;
    }
  }
}

function calculate() {
  try {
        // Evaluate the expression
    let result = eval(expression.replace(/x/g, '*').replace(/±/g, '-'));
    display.value = result;
    expression = result.toString();
  } catch {
      display.value = "Error";
      expression = '';
    }
}



