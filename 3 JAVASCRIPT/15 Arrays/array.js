// Arrays in JavaScript

// 1. Array.isArray
// 2. length
// 3. concat
// 4. copyWithin
// 5. entries
// 6. every
// 7. fill
// 8. filter
// 9. find
// 10. findIndex
// 11. flat
// 12. flatMap
// 13. forEach
// 14. from
// 15. includes


// 1. Array.isArray

let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr));

// 2. length

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);

// 3. concat

let arr2 = [1, 2, 3, 4, 5];
let arr3 = [6, 7, 8, 9, 10];
console.log(arr2.concat(arr3));

// 4. copyWithin

let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.copyWithin(0, 3));

// 5. entries

let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.entries());

// 6. every

let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.every((x) => x > 0));

// 7. fill

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.fill(0));

// 8. filter

let arr8 = [1, 2, 3, 4, 5];
console.log(arr8.filter((x) => x > 3));

// 9. find

let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.find((x) => x > 3));

// 10. findIndex

let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.findIndex((x) => x > 3));

// 11. flat

let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.flat());

// 12. flatMap

let arr12 = [1, 2, 3, 4, 5];
console.log(arr12.flatMap((x) => x * 2));

// 13. forEach

let arr13 = [1, 2, 3, 4, 5];
arr13.forEach((x) => console.log(x));

// 14. from

let arr14 = [1, 2, 3, 4, 5];
console.log(Array.from(arr14, (x) => x * 2));

// 15. includes

let arr15 = [1, 2, 3, 4, 5];
console.log(arr15.includes(3));
