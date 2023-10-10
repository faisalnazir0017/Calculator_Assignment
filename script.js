

let inputString = "";
let resultString = "";
let operatorClicked = false;

// Selecting input elements
const inputField = document.querySelector('.input');
const resultField = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');

// Function to handle button click
function handleButtonClick(value) {
  if (value === '=') {
    try {
      const modifiedExpression = inputString.replace(/÷/g, '/');
      resultString = evaluateExpression(modifiedExpression);
      resultField.value = resultString;
      inputString = resultString.toString();
    } catch (error) {
      resultField.value = 'Error';
    }
  } else if (value === 'AC') {
    inputString = '';
    resultString = '';
    inputField.value = '';
    resultField.value = '';
    operatorClicked = false;
  } else if (value === '√') {
    if (!operatorClicked) {
      inputString += 'Math.sqrt(';
      inputField.value = inputString;
      operatorClicked = true;
    }
  } else if (value === '%') {
    if (!operatorClicked) {
      inputString += '%';
      inputField.value = inputString;
      operatorClicked = true;
    }
  } else {
    if (isOperator(value) && value !== '%' && value !== '√') {
      if (operatorClicked) {
        return;
      }
      operatorClicked = true;
    } else {
      operatorClicked = false;
    }
    inputString += value;
    inputField.value = inputString;
  }
}

// Function to check if a character is an operator
function isOperator(char) {
  return ['+', '-', '*', '/', '÷', '√'].includes(char);
}

// Custom evaluation function
function evaluateExpression(expression) {
  return new Function('return ' + expression)();
}

// Function to handle button click for the cross button
function handleCrossButtonClick() {
    if (inputString.length > 0) {
      if (isOperator(inputString.slice(-1))) {
        operatorClicked = false;
      }
      inputString = inputString.slice(0, -1);
      inputField.value = inputString;
    }
  }
  

// Add click event listener to the cross button
const crossButton = document.querySelector('.cross_button');
crossButton.addEventListener('click', handleCrossButtonClick);

// Add click event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleButtonClick(e.target.innerHTML);
  });
});



