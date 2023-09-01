// type conversion

let x = 10;
console.log(typeof x);
console.log(x);

x = String(x);
console.log(typeof x);
console.log(x);

x = Boolean(x);
console.log(typeof x);
console.log(x);

x = Number(x);
console.log(typeof x);
console.log(x);

x = BigInt(x);
console.log(typeof x);
console.log(x);

// x = Symbol(x);
// console.log(typeof x);
// console.log(x);

x = Object(x);
console.log(typeof x);
console.log(x);

x = Function(x);
console.log(typeof x);
console.log(x);

x = Array(x);
console.log(typeof x);
console.log(x);

x = Date(x);
console.log(typeof x);
console.log(x);

x = RegExp(x);
console.log(typeof x);
console.log(x);


let mark = 10;
let pass = 40;

mark = (10).toString();
console.log(typeof mark);
console.log(mark);

console.log(String(null))
console.log(String(undefined))
console.log(String(true))
console.log(String(false))

// console.log((null).toString())

let num =100.199;
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(Number(num));
console.log(BigInt(num));
