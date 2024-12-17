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
Use case: Formatting the grocery list for display.
forEach
Iterates through the array and performs an action for each element.
Use case: Logging all grocery items.
 * 
 * 
 */

let groceryList = ["Apples", "Bananas", "Carrots"];

// 3. Combine two lists using concat
let extraItems = ["Tomatoes", "Potatoes"];
let combinedList = groceryList.concat(extraItems);
console.log("Combined List:", combinedList);

// 5. Extract a subset of items using slice
let firstTwoItems = combinedList.slice(0, 2);
console.log("First Two Items:", firstTwoItems); // ["Apples", "Bananas"]

// 7. Find the first item starting with 'T' using find
let itemWithT = combinedList.find(item => item.startsWith("T"));
console.log("First Item Starting with 'T':", itemWithT); // "Tomatoes"

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
        id:0,
        name: "TTDS",
        type:"Software Development"
    },
]

item = array_object.find((predicate) => {

})