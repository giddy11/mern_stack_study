/**
 * Types of Functions in JS
 * 
 * Function Declaration: They are defined using the function keyword
 * Function expression:
 * Arrow Function:
 * Annonymous Function: this is function without a name
 */

//function declaration
function add(a,b) {
    return a + b
}

let fistNum = 5;
let secondNum = 10;

let res = add(fistNum, secondNum);

// console.log(res)

//function expression
var add = function(a,b) {
    return a + b;
}

// arrow function
const add = (a,b) => a + b

// annonymous function
subtract(function add(a,b) {
    return a + b
}

)