// Objects in JavaScript

// 1. Object.assign

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };

console.log(Object.assign(obj1, obj2));

// 2. Object.create

let obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.create(obj3));

console.log(Object.values(obj3));
console.log(Object.keys(obj3));


// 3. Object.defineProperty

let obj4 = { a: 1, b: 2, c: 3 };
console.log(Object.defineProperty(obj4, 'd', { value: 4 }));

// 4. Object.defineProperties

let obj5 = { a: 1, b: 2, c: 3 };
console.log(Object.defineProperties(obj5, { d: { value: 4 }, e: { value: 5 } }));

// 5. Object.entries

let obj6 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj6));

// 6. Object.freeze

let obj7 = { a: 1, b: 2, c: 3 };
console.log(Object.freeze(obj7));

// 7. Object.fromEntries

// let obj8 = { a: 1, b: 2, c: 3 };
// console.log(Object.fromEntries(obj8));

// 8. Object.getOwnPropertyDescriptor

let obj9 = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyDescriptor(obj9, 'a'));

// 9. Object.getOwnPropertyDescriptors

let obj10 = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyDescriptors(obj10));

// 10. Object.getOwnPropertyNames

let obj11 = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj11));

let obj12 = [{
    name: 'John',
    age: 30
}, {
    name: 'Jane',
    age: 25
}, {
    name: 'Jack',
    age: 20
}]
console.log(Obj12);

let obj13 = new Object();
console.log(obj13);
obj12.name = 'John';    
obj12.age = 30;
console.log(obj13);

delete obj12.name;
console.log(obj13);


