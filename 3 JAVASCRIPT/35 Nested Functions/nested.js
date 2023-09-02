// Nested function in JavaScript

// 1. Nested function

function outer() {
    console.log('Outer function');

    function inner() {
        console.log('Inner function');
    }

    inner();
}

outer();

// 2. Nested function with parameter

function outer1() {
    console.log('Outer function');

    function inner1(a, b) {
        console.log('Inner function');
        console.log(a + b);
    }

    inner1(5, 10);
}

outer1();

// 3. Nested function with return value

function outer2() {
    console.log('Outer function');

    function inner2(a, b) {
        console.log('Inner function');
        return a + b;
    }

    let result = inner2(5, 10);
    console.log(result);
}

outer2();
