let result;

const firstNumber = parseFloat(prompt("Enter first number: "));
const secondNumber = parseFloat(prompt("Enter second number: "));

const operator = prompt("Enter operator (either +, -, * or /): ");

switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    alert(firstNumber + " + " + secondNumber + " = " + result);
    break;

  case "-":
    result = firstNumber - secondNumber;
    alert(firstNumber + " - " + secondNumber + " = " + result);
    break;

  case "*":
    result = firstNumber * secondNumber;
    alert(firstNumber + " * " + secondNumber + " = " + result);
    break;

  case "/":
    result = firstNumber / secondNumber;
    alert(firstNumber + " / " + secondNumber + " = " + result);
    break;

  default:
    console.log("Invalid operator");
    break;
}
