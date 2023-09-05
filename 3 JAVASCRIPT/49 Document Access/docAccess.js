// Document Access

var element = document.getElementsByTagName("body")
console.log(element);
console.log(element[0]);

var element = document.getElementById("header-title")
console.log(element);

var element = document.getElementsByClassName("list-group-item")
console.log(element);
console.log(element[0]);

var element = document.querySelector("#header-title")
console.log(element);

console.log(document.baseURI);
console.log(document.doctype);
console.log(document.cookie);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].id);

console.log(document.images);

console.log(document.scripts);
console.log(document.scripts[0]);

console.log(document.all);