function calculator(a, b, type) {
    if (isNaN(a)) return "Doesn't support non numeric values";
    if (isNaN(b)) return "Doesn't support non numeric values";
    if (!a) return "First value is missing";
    if (!b) return "Second value is missing";
    a = parseInt(a);
    b = parseInt(b);
    if (type === "Addition") return a + b;
    if (type === "Subtraction") return a - b;
    if (type === "Multiplication") return a * b;
    if (type === "Division") return a / b;
    if (type === "Modulus") return a % b;
    if (type === "Exponentiation") return a ** b;
    if (type === "Increment") return ++a;
    if (type === "Decrement") return --a;
    return "Invalid type";

}

let a = 5
let b = 10
console.log(calculator(a, b, "Addition"));
console.log(calculator(a, b, "Subtraction"));
console.log(calculator(a, b, "Multiplication"));
console.log(calculator(a, b, "Division"));
console.log(calculator(a, b, "Modulus"));
console.log(calculator(a, b, "Exponentiation"));
console.log(calculator(a, b, "Increment"));
console.log(calculator(a, b, "Decrement"));
console.log(calculator(a, b, "Invalid"));