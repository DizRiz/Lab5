const Logger = require('./logging')


class Calculator {
  constructor() {
      this.id = Math.floor(Math.random() * 100) + 1;
      this.Logger = new Logger()
    }
  #log = (value) => {
      this.Logger.log(this.id, value)
  };
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }
  multi(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
