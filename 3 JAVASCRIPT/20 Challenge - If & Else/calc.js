// Calculator

// user input
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var operator = prompt("Enter operator");

// convert string to number
num1 = parseInt(num1);
num2 = parseInt(num2);

// calculate
if (operator == '+') {
    var result = num1 + num2;
}
else if (operator == '-') {
    var result = num1 - num2;
}
else if (operator == '*') {
    var result = num1 * num2;
}
else if (operator == '/') {
    var result = num1 / num2;
}
else {
    var result = "Invalid operator";
}
