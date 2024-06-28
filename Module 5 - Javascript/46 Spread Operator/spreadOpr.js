// spread operator

let arr = [1, 2, 3];
let arr1 = [4, 5, 6];

let arr2 = [...arr, ...arr1];

console.log(arr2);

let obj = {
    name: 'Rahul',
    age: 20
}

let obj1 = {
    name: 'Rahul',
    age: 20,

    address: {
        city: 'Delhi',
        state: 'Delhi'
    }
}

let obj2 = {
    ...obj,
    ...obj1
}

console.log(obj2);

let obj3 = {
    ...obj,
    ...obj1,
    address: {
        ...obj.address,
        city: 'Mumbai'
    }
}

console.log(obj3);
