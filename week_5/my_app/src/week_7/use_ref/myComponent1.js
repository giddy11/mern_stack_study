import React, { useEffect, useRef, useState } from 'react'

export default function MyComponent1() {
    let [number, setNumber] = useState(0);

    const ref = useRef(0);
    const inputRef = useRef(null)

    useEffect(() => {
        console.log("COMPONENT RERENDERED");
    })

    const handleClickWithoutRef = () => {
        setNumber(n => n + 1)
    }

    const handleClickWithRef = () => {
        ref.current += 1
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
        console.log(`ref value = ${ref.current}`)
        console.log(`Input ref = ${inputRef.current.value}`)

    }

  return (
    <div>
        <button onClick={handleClickWithoutRef}>Click me without ref!</button>
        <button onClick={handleClickWithRef}>Click me with ref!</button>
        <input ref={inputRef}/>
    </div>
  )
}
