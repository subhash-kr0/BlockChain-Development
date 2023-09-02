// Parameters & Arguments

// Parameters are the names listed in the function definition.
// Arguments are the real values passed to (and received by) the function.

function greet() {
    console.log('Hello there');
}

greet();

const speak1 = function (name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
}

speak1();
speak1('mario', 'morning');
