// Break and Continue

// Break

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Stop the loop');
        break;
        }

    console.log(i);
    }

// Continue

for (let i = 0; i < 10; i++) {

    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
        }

    console.log(i);
    }