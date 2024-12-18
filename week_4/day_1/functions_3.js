/**
 * We have the open, fetch, axios
 * open: helps to open files in js
 * 
 * 
 */

//first way of getting an info from a url
let getFile = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    
    console.log(await response.json())
}

// second way
let getFile2 = async () => {
    await fetch("https://jsonplacehdsdsdsdolder.typicode.com/posts/2").then(res => res.json()).then(data => console.log(data))
}

getFile2()