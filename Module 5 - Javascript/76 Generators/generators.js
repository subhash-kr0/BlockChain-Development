function* numberGen() {

    console.log("inside generator");
    yield 1;
    console.log("inside yield 1 ")
    yield 2;
    yield 3;
}

let num = numberGen();
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().done);
console.log(num.next());

function* generator() {
    let i=0;
    while(true) {
        yield i++;
    }
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());


console.log(num.next().value);
console.log(gen.next().value);

function* generator2(arr) {
    for(let i=0; i<arr.length; i++) {
        yield arr[i];
    
    }
}

let gen2 = generator2([6,1,2,3,4,5]);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);

while(true) {
    console.log(gen2.next().value);
    if(gen2.next().done == true) {
        break;
    }
}