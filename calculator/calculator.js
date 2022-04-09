
class Calculator {
  firstNumber;
  secondNumber;
  operator;
  value;

  constructor(firstNumber, secondNumber, operator) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;
      this.operator = operator;
      this.value = 0;
  }

  // determine the current operation's label
  getAction() {
    switch(Operators) {
      case "add":
        break;
      case "subtract":
        break;
      case "multiply":
        break;
      case "divide":
        break;
    }
  }

  // performa a calculation based on the currently selected operation
  operate(operator) {}

  attemptedDivideByZero = false;

  // perform addition operation
  add() {
    value = this.firstNumber + this.secondNumber;
    value = result;
  }

  // perform subtraction operation
  subtract() {
    value = this.firstNumber - this.secondNumber;
    value = result;
  }

  // perform multiplication operation
  multiply() {
    value = this.firstNumber * this.secondNumber;
    value = result;
  }

  // perform divide operation
  divide() {
    value = this.firstNumber / this.secondNumber;
    value = result;
  }

}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;