// Generator in javascript

// Generator is a function that can be entered and exited multiple times
// Generator is a function that can be paused and resumed
// Generator is a function that can return multiple values

// Generator function is created using function* keyword
// Generator function returns a generator object
// Generator object is an iterator
// Generator object can be iterated using for...of loop

// Example 1
function* generatorFunction() {
    console.log('This will be executed first.');
    yield 'Hello, ';

    console.log('I will be printed after the pause');
    yield 'World!';
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// Example 2
function *generatorFunction1() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const generatorObject1 = generatorFunction1();

console.log(generatorObject1.next().value);
console.log(generatorObject1.next().value);
console.log(generatorObject1.next().value);
console.log(generatorObject1.next().value);
console.log(generatorObject1.next().value);
console.log(generatorObject1.next().value);

// Example 3
function *generatorFunction2() {

    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const generatorObject2 = generatorFunction2();

console.log(generatorObject2.next().value);
console.log(generatorObject2.next().value);
console.log(generatorObject2.next().value);
console.log(generatorObject2.next().value);
console.log(generatorObject2.next().value);
console.log(generatorObject2.next().value);
