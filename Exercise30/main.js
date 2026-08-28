function operate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multipcation(a, b) {
  return a * b;
}

function divition(a, b) {
  return a / b;
}

console.log("Addition:", operate(5, 3, add)); // Output: 8
console.log("Subtraction:", operate(5, 3, subtract)); // Output: 2
console.log("multipcation:", operate(5, 3, multipcation)); // Output: 2
console.log("divition:", operate(15, 3, divition)); // Output: 2