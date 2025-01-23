import React, { useEffect, useRef, useState } from 'react'

export default function MyComponent2() {
    let [number, setNumber] = useState(0);

    const ref = useRef(0);
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("COMPONENT RERENDERED");
    })

    const handleClick1 = () => {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
        console.log(`Input ref = ${inputRef1.current.value}`)
    }

    const handleClick2 = () => {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""
        console.log(`Input ref = ${inputRef1.current.value}`)
    }

    const handleClick3 = () => {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        console.log(`Input ref = ${inputRef1.current.value}`)
    }

  return (
    <div>
        <button onClick={handleClick1}>Click me 1!</button>
        <input ref={inputRef1}/>

        <button onClick={handleClick2}>Click me 2!</button>
        <input ref={inputRef2}/>

        <button onClick={handleClick3}>Click me 3!</button>
        <input ref={inputRef3}/>
    </div>
  )
}
