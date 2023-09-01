// Loops in JavaScript

// 1. for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
    }

// 2. for...in loop

let obj = {
    name: 'John',
    age: 23,
    city: 'London'
    }

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
    }

// 3. for...of loop

let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
    }

// 4. while loop

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
    }

// 5. do...while loop

let j = 0;

do {
    console.log(j);
    j++;
    }
while (j < 10);

// 6. forEach loop

let arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (value, index, array) {
    console.log(value, index, array);
    }
);

// 7. map loop

let arr2 = [1, 2, 3, 4, 5];

let arr3 = arr2.map(function (value, index, array) {
    return value * 2;
    }
);

console.log(arr3);

// 8. filter loop

let arr4 = [1, 2, 3, 4, 5];

let arr5 = arr4.filter(function (value, index, array) {
    return value > 2;
    }
    
);
