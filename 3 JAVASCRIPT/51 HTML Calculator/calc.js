
var num1 = Number(document.getElementById("one").innerText);
var num2 = Number(document.getElementById("two").innerText);
var opr = (document.getElementById("oprr").innerText);

const res = (a,b,opr) => {
    if(opr === "Addition") return a+b;
    if(opr === "Subtraction") return a-b;
    if(opr === "Multiplication") return a*b;
    return a/b;
}

var result = res(num1,num2,opr);
document.getElementById("result").innerHTML = `<strong>Result ${opr} for ${num1} and ${num2} is ${result}</strong>`;

