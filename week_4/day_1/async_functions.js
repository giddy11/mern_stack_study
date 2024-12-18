/**
 * Asynchronous Function: Functions that takes a while before giving you the response or answers
 * 
 * setTimeout
 */

function LogStudent(name) {
    console.log(`Hello ${name}`);
}

LogStudent()

console.log("THis is the Beginning")

setTimeout(() => LogStudent("Emmanuel"), 3000)
setTimeout(() => LogStudent("Gideon"), 10000)

console.log("THis is the end")