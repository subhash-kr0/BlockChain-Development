// functions in javascript

// function declaration
function greet() {
    console.log('Hello there');
}

// function expression
const speak = function () {
    console.log('Good day!');
}

greet();
speak();

// arguments & parameters
const speak1 = function (name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
}

speak1();
speak1('mario', 'morning');

// returning values
const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
}

const area = calcArea(5);
console.log(area);

// regular function
const calcArea1 = function (radius) {
    return 3.14 * radius ** 2;
}

// arrow function
const calcArea2 = radius => 3.14 * radius ** 2;

const area1 = calcArea2(5);
console.log('area is:', area1);
