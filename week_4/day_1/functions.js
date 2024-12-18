/**
 * Find, filter, map, forEach
 * 
 * Find: Returns  the first item that matches a condition
 * Filter: Returns all items that satisfies the condition OR
 * It searches for every matching item
 * 
 * Map: creates a new array by applying a function to each element
 * it helps to tansform an array of an object into a new array
 * 
 * forEach:
 */

// find
let students = ["Emmanuel", "Jacob", "Peter", "Paul", "Silas"];

let foundStudent = students.find((pred) => {
    let foundPeter = pred =="Peterdgg";

    return foundPeter;
})

// filter
let filt = students.filter((pred) => {
    return pred.includes("e");
})

let nums = [1,2,3,4,5,6,7,8,9,10]

// this pattern is when we have multiple lines of logic
let mapStudents = students.map((item) => {
    return `- ${item}`;
})

// this pattern is when we have one lines of logic
let mapStudents1 = students.map(item => `- ${item}`)

students.forEach(item => {
    console.log(`- ${item}`)
})

console.log(students);