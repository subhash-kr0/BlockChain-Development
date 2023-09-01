// Nested Loop

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop: ${i}`);

    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop: ${j}`);
        }
    }

// Nested Loop

let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
    ];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        }
    }
