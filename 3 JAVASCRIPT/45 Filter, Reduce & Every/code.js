// filter , reduce & every, some

// filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.filter((element) => element % 2 == 0))

let arr1 = arr.filter(function (element) {
    return element % 2 == 0;
}
);

console.log(arr1);

// reduce

let arr2 = arr.reduce(function (accumulator, element) {
    return accumulator += element;
}
);

console.log(arr2);

// every

let arr3 = arr.every(function (element) {
    return element % 2 == 0;
}
);

console.log(arr3);

// some

let arr4 = arr.some(function (element) {
    return element % 2 == 0;
}
);

console.log(arr4);