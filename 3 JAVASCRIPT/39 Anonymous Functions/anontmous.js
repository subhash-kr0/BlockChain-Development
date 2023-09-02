// Anonymous Functions

// //code

let add = function(a,b){
    return a+b;
}

let result = add(5,10);
console.log(result);

//return function with variable

let add1 = function(a,b){
    let sum = a+b;
    return sum;
}

//calling function

let result1 = add1(5,10);
console.log(result1);
