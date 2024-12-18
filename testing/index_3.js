/**
 * SO now we will look at 3 key functions that are asynchronous functions. So most times if we are fetching very large files
 * we need an asynchr process or when we are fetching information from a server, website, we also need the async process.
 * 
 * 1. Open: is a function similar to your timeout. its a function that helps us to open files in js. so in case u want to get the content of a file, u can
 * use open.
 * 2. axios
 * 3. fetch
 * 
 * so if i want to get an info from my computer, i use a function called fetch
 * it is an async action that returns a response about a web request
 * the fetch takes in the url which is a website url or it can be a file. The response is a promise, meaning its an async function that needs to be awaited.
 * lets create a function getFile
 * 
 * What if we want to get the actual res from the web request, then u call the different functions in the response that will then give
 * you the desired response.
 */

// let getFile = async ()=> {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     // let data = await response.json()
//     let data = await response.blob() // this has to do with images

//     console.log(data)
// }

let getFile = async ()=> {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json()).then(data => console.log(data))
}

getFile()