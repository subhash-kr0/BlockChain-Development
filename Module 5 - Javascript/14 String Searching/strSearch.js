// string searching

// 1. indexOf
// 2. lastIndexOf
// 3. search
// 4. includes
// 5. startsWith
// 6. endsWith
// 7. match
// 8. replace
// 9. split
// 10. slice
// 11. substring
// 12. substr
// 13. concat
// 14. trim
// 15. charAt
// 16. charCodeAt
// 17. fromCharCode
// 18. toLowerCase
// 19. toUpperCase
// 20. repeat
// 21. padStart
// 22. padEnd
// 23. trimStart
// 24. trimEnd
// 25. valueOf
// 26. toString
// 27. length   
// 28. matchAll
// 29. normalize
// 30. codePointAt

// 1. indexOf

let str1 = ' JavaScript  ';
console.log(str1.indexOf('a'));
console.log(str1.indexOf('a', 5));
console.log(str1.indexOf('a', 10));
console.log(str1.indexOf('a', -5));
console.log(str1.indexOf('a', -10));
console.log(str1.indexOf('a', 15));
console.log(str1.indexOf('a', 20));

// 2. lastIndexOf

let str2 = ' JavaScript  ';
console.log(str2.lastIndexOf('a'));
console.log(str2.lastIndexOf('a', 5));
console.log(str2.lastIndexOf('a', 10));
console.log(str2.lastIndexOf('a', -5));

// 3. search

let str = ' JavaScript  ';
console.log(str.search('a'));
console.log(str.search('a', 5));
console.log(str.search('a', 10));
console.log(str.search('a', -5));

// 4. includes

let str4 = ' JavaScript  ';
console.log(str4.includes('a'));
console.log(str4.includes('a', 5));
console.log(str4.includes('a', 10));

// 5. startsWith

let str5 = ' JavaScript  ';
console.log(str5.startsWith('a'));
console.log(str5.startsWith('a', 5));
console.log(str5.startsWith('a', 10));

// 6. endsWith

let str6 = ' JavaScript  ';
console.log(str6.endsWith('a'));
console.log(str6.endsWith('a', 5));

// 7. match

let str7 = ' JavaScript  ';
console.log(str7.match('a'));
console.log(str7.match('a', 5));
console.log(str7.match('a', 10));
