/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2) {
  return num1 + num2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2) {
  return num1 - num2;
};

function subtractNumbers() {
  let subtract1 = Number(document.querySelector("#subtract1").value);
  let subtract2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => {
  return num1 * num2;
};

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => {
  return num1 / num2;
};

const divideNumbers = () => {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(dividend, divisor);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", () => {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let applyDiscount = document.querySelector("#member").checked;

  if (applyDiscount) {
    subtotal *= 0.80;
  }

  document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
});
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = arr;
/* Output Odds Only Array */
const odds = arr.filter((e) => e % 2 !== 0);
document.querySelector("#odds").textContent = odds;

/* Output Evens Only Array */
const evens = arr.filter((e) => e % 2 === 0);
document.querySelector("#evens").textContent = evens;
/* Output Sum of Org. Array */
const sum = arr.reduce((a, b) => a + b, 0);
document.querySelector("#sumOfArray").textContent = sum;
/* Output Multiplied by 2 Array */
const multiplyBy2 = arr.map((e) => e * 2);
document.querySelector("#multiplied").textContent = multiplyBy2;
/* Output Sum of Multiplied by 2 Array */
const sumMultiply = multiplyBy2.reduce((a, b) => a + b, 0);
document.querySelector("#sumOfMultiplied").textContent = sumMultiply;
