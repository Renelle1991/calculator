function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

const buttons = document.querySelectorAll("button");
const calculatorState = [];

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // STEP 1: get the data from the button
    const value = event.target.innerHTML;

    // STEP 2: display the data from the button
    // on the screen
    const screen = document.querySelector("#screen");

    screen.innerHTML = value;
    calculatorState.push(value);
    console.log(calculatorState);
    if (value === "=") {
      let result;
      const firstOperand = calculatorState[0];
      const operator = calculatorState[1];
      const secondOperand = calculatorState[2];

      if (operator === "+") {
        result = add(parseInt(firstOperand), parseInt(secondOperand));
      } else if (operator === "-") {
        result = sub(parseInt(firstOperand), parseInt(secondOperand));
      } else if (operator === "*") {
        result = mult(parseInt(firstOperand), parseInt(secondOperand));
      } else if (operator === "÷") {
        result = div(parseInt(firstOperand), parseInt(secondOperand));
      }

      console.log(result);
      screen.innerHTML = result;
    }
  });
});
