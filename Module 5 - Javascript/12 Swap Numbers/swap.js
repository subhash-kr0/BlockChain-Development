// Swap

let a = 10;
let b = 3;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// Swap without temp

let x = 10;
let y = 3;

x = x + y;
y = x - y;
x = x - y;

console.log(x);
console.log(y);

// Swap without temp

let p = 10;
let q = 3;

[p, q] = [q, p];

console.log(p);
console.log(q);

// Swap without temp

let m = 10;
let n = 3;

m = m ^ n;
n = m ^ n;
m = m ^ n;

console.log(m);
console.log(n);

// Swap without temp

let r = 10;
let s = 3;

r = r * s;
s = r / s;
r = r / s;

console.log(r);
console.log(s);

// Swap without temp

let t = 10;
let u = 3;

swap(t, u);

function swap(t, u) {
    t = t + u;
    u = t - u;
    t = t - u;
    
    console.log(t);
    console.log(u);
    }

// Swap without temp

let v = 10;
let w = 300;

swap(v, w);
