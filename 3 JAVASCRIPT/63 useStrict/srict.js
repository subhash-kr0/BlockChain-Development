// Strict

// 1. Use strict
// 2. Strict mode in function
// 3. Strict mode in class
// 4. Strict mode in object
// 5. Strict mode in file
// 6. Strict mode in eval
// 7. Strict mode in HTML
// 8. Strict mode in IIFE
// 9. Strict mode in modules
// 10. Strict mode in web workers
// 11. Strict mode in web assembly
// 12. Strict mode in async functions
// 13. Strict mode in generators
// 14. Strict mode in dynamic import
// 15. Strict mode in for-in loops

// 1. Use strict

'use strict';

// 2. Strict mode in function

function outer() {
    'use strict';
    console.log('Outer function');
}

outer();

// 3. Strict mode in class

class Outer {
    constructor() {
        'use strict';
        console.log('Outer class');
    }
}

let outerObj = new Outer();

// 4. Strict mode in object

let obj = {
    outer: function () {
        'use strict';
        console.log('Outer object');
    }
}

obj.outer();

// 5. Strict mode in file

// 'use strict';

// 6. Strict mode in eval

eval('console.log("Eval")');

// 7. Strict mode in HTML

// <script>
//     'use strict';
//     console.log('HTML');
// </script>

// 8. Strict mode in IIFE

(function () {
    'use strict';
    console.log('IIFE');
}
)();

// 9. Strict mode in modules

// import { outer } from './strictModule.js';

// 10. Strict mode in web workers

// let worker = new Worker('./strictWorker.js');

