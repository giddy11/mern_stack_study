
function LogStudent(name) {
    console.log(`Hello ${name}`)
}
//with synchrounous function
// LogStudent("Gideon")

/**
 * The setTimer takes 2 things
 * it takes an anonymous function or a function or a handler (which means what should happen), 
 * and the second which is how long do you want the action to take before it happens in the future
 * 
 * so in order for ur application not to wait, thats y u see some websites, ur still operating the websites meanwhile something is loading somewhere
 * So u can do anything ur doing freely but the actions that goes on in the website still continue to go on and doesn't affect ur flow
 * Note that the setTimeout is like a simulation of the real world flow. I,am just actually delaying. this settimeout is just to delay.
 * 
 * Alright but can actually have processes that are that long. maybe going to the website to fetch some information which we will look at when we get to DOM.
 Going to websites to fetch info, get info from a file and all of those things. it will take a while before those info comes in. typically maybe 3secs, 5secs and so on.
 * 
 To summarize all i said, first of all i define a function. Then technically base on the code if u just call the function like that it will run immediately.
 Now when an action or function happens immediately, it is called a synchronous action.
 But when an action doesn't give u feedback immediately, remember ur server will be located in a different place, ur main frontend will be located in a differ place
 same with ur database, realtime connector, notifications, and all other features will be located in different places.
 And these places means computer servers that you have hosted in different places.
 so for ur own application to go and get these information from the database and come back, it wont happen immediately
 its not as you say find this user and it will give u the answer immediately, no it wont give u the answer immediately.
 Now since it wont give u the answer immediately, it is important for you to manage that wait time between when ur making the call and when ur receiving a response.

 Now in the case of settimeout, we are using it to simulate an asynchronous process. so in this case, we are waiting for 3secs, then after 3secs
 we want it to run this action. SO this action is delayed to be run in the future
 *
 */

setTimeout(()=> LogStudent("Blessing"), 3000) //3000ms == 3secs
setTimeout(()=> LogStudent("David"), 10000)

console.log("This is the end");