import React, { useState, useEffect } from 'react';

export default function App1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`The count inside useeffect is ${count}`);
    }, []); // Runs only when `count` changes

    console.log(`The count is ${count}`);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count)}>Set Count to Current Value</button>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
}

/**
 * What is useEffect?
useEffect is a hook in React that lets you perform side effects in your functional components.

Think of side effects as anything React doesn’t do for you automatically, like:

Fetching data from an API.
Updating the DOM manually.
Setting up a timer.
It’s like saying:

"Hey React, after you've finished rendering, I want to do this extra thing."
 * 
 * 
 * Syntax
Here’s how useEffect looks:

jsx
Copy
Edit
useEffect(() => {
  // Your code here (side effect)
}, [dependencies]);
The first argument is a function where you write the effect (what you want to do).
The second argument is an array of dependencies (optional). React watches these and re-runs the effect if they change.
 * 
 * 
 */