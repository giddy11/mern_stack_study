/**
 * Control FLow in JS
 * 
 * 1.Sequential Execution
 * 2. Conditional statements (if-else, switch)
 * 3. Loops
 *    i. for loop: 
 * 
 * Inbuilt functions
 */


//push
let groceryList = ["Apples", "Bananas", "Carrots"]
groceryList.push("Eggs");


console.log("line 15 ", groceryList)
// console.log(`line 16 ${groceryList}`)

//pop
groceryList.pop()
console.log("line 20 ", groceryList)

//concat
let extraItems = ["Tomatoes", "Potatoes"];
let combinedList = groceryList.concat(extraItems);
console.log("line 26 CombinedList", combinedList)

//sort
// assigtnment: sort them the opposite way ie descending order
combinedList.sort()
console.log("line 32 CombinedList", combinedList)

//slice
let firstTwoItems = combinedList.slice(0, 14)
console.log("line 37 firstTwoItems", firstTwoItems)

/**
 * Read up startswith, includes, filter, find, map, replace
 */

//print all even numbers
// let nums = [3,4,5,6,7,3,2,7,9,6]

// for(let i = 0; i < nums.length; i++) {
//     if (nums[i]%2 == 0){
//         console.log(nums[i]);
//     }
//     else {
//         continue;
//     }
// }

// let num = 1

// for( num; num > 0 && num <= 20; num++) {
//     if (num == 9) continue;
//     console.log(num);
// }


// while (num > 0 && num <= 20) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num > 0 && num <= 20)




// let age = 18;

// if (age > 18) {
//     console.log("You are eligible to vote.");
// } else if (age == 18) {
//     console.log("You will receive a copy of the instructional manual.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// let day = "sunday";

// switch(day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("This is a working day");
//         break;
//     case "saturday":
//         console.log("This is a weekend day");
//         break;
//     case "sunday":
//         console.log("This is a weekend day");
//         break;
//     default:
//         console.log("This is an invalid day of the week");
// }

