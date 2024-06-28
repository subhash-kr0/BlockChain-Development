// innerText & innerHTML

// innerText

var h1 = document.querySelector("h1");
console.log(h1.innerText);
h1.innerText = "Hello World";

var element = document.getElementsByTagName("h1");
console.log(element[0]);
element[0].innerText = "Hello World";
element[0].innerText = "<h1>Hello World</h1>";

// innerHTML

var h1 = document.querySelector("h1");
console.log(h1.innerHTML);
h1.innerHTML = "<h1>Hello World</h1>";

var element = document.getElementsByTagName("h1");
console.log(element[0]);
element[0].innerHTML = "<h1>Hello World</h1>";
element[0].innerHTML = "Hello World";
element[0].innerHTML = "<h1>Hello World</h1>";
