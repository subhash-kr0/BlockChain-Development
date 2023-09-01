var maximum = 9
var minimum = 1

var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(random);

var element = document.querySelector("input");
var result = document.querySelector("span");
var chance = 0;

function check() {
    if(chance === 3) {
        return (result.innerHTML = "You have exhausted all your chances. The number was " + random);
        
    }
    chance++;
    var value = element.value;
    console.log(value);
    value = Number(value);
    if(random == value){
        result.innerText = "You guessed it right!";
    }
    else if(random > value) {
        result.innerText = "You guessed it wrong! The number is greater than " + value;
    }
    else if(random < value) {
        result.innerText = "You guessed it wrong! The number is less than " + value;
    }

}