
let s = "This is mt computer computer  Computer is mine";

let reg = /computer/g;
console.log(reg)
console.log(reg.source)
// console.log(s.replace(reg, "laptop"));

// exec() this is for searching regex

let result = reg.exec(s);
console.log(result);

result = reg.exec(s);
console.log(result);

let reg1 = /computer/i;
console.log(reg1);

// test() return true or false

let result1 = reg1.test(s);
console.log(result1);

// match() it will return array of result or null

let result2 = s.match(reg1);
console.log(result2);

// search() return index of first match else -1

let result3 = s.search(reg1);
console.log(result3);

let s1 = "This is mt computer computer  Computer is mine";

let reg2 = /computer/gi;
console.log(reg2);

let reg3 =/[abc]/gi;
console.log(reg3);

let reg4 = /[a-z]/gi;
console.log(reg4);

let reg5 = /[0-9]/gi;
console.log(reg5);
