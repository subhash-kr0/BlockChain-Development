// string handling

// 1. length
var str = "Hello World!";
var n = str.length;
console.log(n);

// 2. indexOf()
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

// 3. lastIndexOf()
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

// 4. search()
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

// 5. slice()
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);
console.log(str.slice(-12, -6));

// 6. substring()
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);

// 7. substr()
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);

// 8. replace()
var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

// 9. toUpperCase()
var str = "Hello World!";
var res = str.toUpperCase();
console.log(res);

// 10. toLowerCase()
var str = "Hello World!";
var res = str.toLowerCase();
console.log(res);

// 11. concat()
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

// 12. trim()
var str = "       Hello World!        ";
console.log(str.trim());

// 13. charAt()
var str = "HELLO WORLD";
console.log(str.charAt(0));

// 14. charCodeAt()
var str = "HELLO WORLD";
console.log(str.charCodeAt(0));

// 15. split()
var str = "a,b,c,d,e,f";
var arr = str.split(",");
console.log(arr);
