/**
 * push
Adds an item to the end of an array.
Use case: Adding new items like "Eggs" to the grocery list.
pop
Removes the last item from an array.
Use case: Undo an accidental addition to the list.
concat
Combines two or more arrays into a new array.
Use case: Combine the main list with extra items.
sort
Sorts array items alphabetically (or numerically if a custom comparator is used).
Use case: Sorting the grocery list for better organization.
slice
Extracts a subset of an array (does not modify the original array).
Use case: Getting the first two items for a quick shopping trip.
splice
Removes or replaces items in an array at a specific index.
Use case: Removing an item you no longer need.

find
Returns the first item that matches a condition.
Use case: Finding the first item starting with "T".

filter
Returns all items that satisfy a condition. OR
search for every matching item
Use case: Finding all items that contain the letter "o".

includes
Checks if an item exists in the array.
Use case: Checking if "Bananas" are already on the list.

map
Creates a new array by applying a function to each element.
it helps you to transform an array of an object into another array by going through all the elements
Use case: Formatting the grocery list for display.

forEach
Iterates through the array and performs an action for each element.
it is map without response
also the return in forEach isnt necessary
it automatically updates the elements
Use case: Logging all grocery items.
 * 
 * 
 */

let groceryList = ["Apples", "Bananas", "Carrots"];

// 3. Combine two lists using concat
let extraItems = ["Tomatoes", "Potatoes"];
let combinedList = groceryList.concat(extraItems);
// console.log("Combined List:", combinedList);

// 5. Extract a subset of items using slice
let firstTwoItems = combinedList.slice(0, 2);
// console.log("First Two Items:", firstTwoItems); 

// 7. Find the first item starting with 'T' using find
let itemWithT = combinedList.find(item => item.startsWith("T"));
// console.log("First Item Starting with 'T':", itemWithT);

let array_object = [
    {
        id:0,
        name: "TTDS",
        type:"Software Development"
    },
    {
        id:1,
        name: "BuildersDeck",
        type:"Technology Consulting"
    },
    {
        id:2,
        name: "TTDS",
        type:"Software Development"
    },
]

/**
 * The predicte is hosuing the object of the array.
 */

// item = array_object.find((predicate) => {
//     let foundItem = predicate.id == 1
//     return foundItem;
// })

// console.log(item)

arr = ["Ada", "Joy", "Esohe", "Gideon"];

// item = arr.find((pred) => {
//     let foundJoy = pred == "Joys"
//     return foundJoy
// })

item = arr.find((pred) => pred == "Joy")

// console.log(item)


/**
 * FILTER
 */

item = arr.filter((pred) => {
    return pred.includes("o");
})

// console.log(item)

/**
 * MAP
 */

newArr = array_object.map((element) => {
    element.id++;
    return element
})

// 10. Map to create a formatted list
let formattedList = combinedList.map(item => `- ${item}`);
console.log("Formatted List:", formattedList);
// ["- Apples", "- Bananas", "- Potatoes", "- Tomatoes"]

console.log(newArr)