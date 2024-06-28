// Arrow functions in JavaScript

// 1. Arrow function

let outer = () => {
    console.log('Outer function');
}

outer();

// 2. Arrow function with parameter

let outer1 = (a, b) => {
    console.log('Outer function');
    console.log(a + b);
}

outer1(5, 10);

// 3. Arrow function with return value

let outer2 = (a, b) => {
    console.log('Outer function');
    return a + b;
}

let result = outer2(5, 10);
console.log(result);

// 4. Arrow function with single parameter

let outer3 = a => {
    console.log('Outer function');
    console.log(a);
}

outer3(5);

// 5. Arrow function with single parameter and return value

let outer4 = a => {
    console.log('Outer function');
    return a;
}

let result1 = outer4(5);
console.log(result1);