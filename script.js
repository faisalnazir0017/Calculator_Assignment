// let inputString = "";
// let resultString = "";
// let operatorClicked = false;

// // Selecting input elements
// const inputField = document.querySelector('.input');
// const resultField = document.querySelector('.result');
// const buttons = document.querySelectorAll('.button');

// // Function to handle button click
// function handleButtonClick(value) {
//     if (value === '=') {
//       try {
//         // Replace ÷ with / and evaluate
//         const modifiedExpression = inputString.replace(/÷/g, '/');
//         resultString = evaluateExpression(modifiedExpression);
//         resultField.value = resultString;
//         inputString = resultString.toString();
//       } catch (error) {
//         resultField.value = 'Error';
//       }
//     } else if (value === 'AC') {
//       inputString = '';
//       resultString = '';
//       inputField.value = '';
//       resultField.value = '';
//       operatorClicked = false;
//     } else {
//       if (value === '%') {
//         // Check if the last character is already "%"
//         if (inputString.slice(-1) === '%') {
//           return;
//         }
//       }
//       if (isOperator(value) && value !== '%') {
//         if (operatorClicked) {
//           // Avoid adding multiple consecutive operators
//           return;
//         }
//         operatorClicked = true;
//       } else {
//         operatorClicked = false;
//       }
//       inputString += value;
//       inputField.value = inputString;
//     }
//   }
  
  
  

// // Function to check if a character is an operator
// function isOperator(char) {
//   return ['+', '-', '*', '/', '÷', '√'].includes(char);
// }

// // Add click event listener to all buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     handleButtonClick(e.target.innerHTML);
//   });
// });





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
      // Replace ÷ with / and evaluate
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
        // Avoid adding multiple consecutive operators
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
  // Replace % with %
  return new Function('return ' + expression)();
}

// Add click event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleButtonClick(e.target.innerHTML);
  });
});
