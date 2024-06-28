// Dates

console.log(Date.now());

let d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getSeconds());
console.log(d.getTime());
console.log(d.getTimezoneOffset());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCFullYear());
console.log(d.getUTCHours());
console.log(d.getUTCMilliseconds());
console.log(d.getUTCMinutes());
console.log(d.getUTCMonth());
console.log(d.getUTCSeconds());
console.log(d.getYear());

console.log(d instanceof Date);

// d= new Date(year, month, day, hours, minutes, seconds, milliseconds)

d = new Date(2020, 0, 3, 12, 30, 30, 30);
console.log(d);

// 1900+year,  1970 is the base year
d = new Date(18,0)
console.log(d);

// string
d = new Date('January 3 2020');
console.log(d);

// ISO Date YYYY-MM-DDTHH:MM:SSZ
// Short Date MM/DD/YYYY
// Long Date Month DD YYYY

d = new Date('2020-01-03T12:30:30Z');
console.log(d);

d = new Date('01/03/2020');
console.log(d);

d = new Date('Jan 03 2020');
console.log(d);

d = Date.parse('Jan 03 2020');