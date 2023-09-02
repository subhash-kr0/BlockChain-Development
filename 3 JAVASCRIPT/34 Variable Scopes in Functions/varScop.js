//Variable Scopes in Functions

//Global Scope
var myGlobal = 10;

function fun1() {
    // Only change code below this line
    oopsGlobal = 5;
    // Only change code above this line
}

//Function Scope
function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
