// 1) primitive data types
// 2) non-primitive data types

// primitive data types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

// non-primitive data types
// 1. object
// 2. array
// 3. function
// 4. date
// 5. regex
// 6. map
// 7. set
// 8. weakmap
// 9. weakset


var data = "Hello world";
console.log(data);
console.log(typeof data);

var data = 1;
console.log(data);
console.log(typeof data);

var data = true;
console.log(data);
console.log(typeof data);

var data = null;
console.log(data);
console.log(typeof data);

var data;
console.log(data);
console.log(typeof data);

var data = Symbol();
console.log(data);
console.log(typeof data);

var data = 1n;
console.log(data);
console.log(typeof data);


// non-primitive data types
var data = {};
console.log(data);
console.log(typeof data);

var data = [];
console.log(data);
console.log(typeof data);

var data = function() {};
console.log(data);
console.log(typeof data);

var data = new Date();
console.log(data);
console.log(typeof data);

var data = /hello/;
console.log(data);
console.log(typeof data);

var data = new Map();
console.log(data);
console.log(typeof data);

var data = new Set();
console.log(data);
console.log(typeof data);

var data = new WeakMap();
console.log(data);
console.log(typeof data);

var data = new WeakSet();
console.log(data);
console.log(typeof data);
