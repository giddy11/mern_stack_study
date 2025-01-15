import React from 'react'

/**
 * Mapping Components: This is when you want to repeat a process.
 * more like you want to use one style, and repeat itself in other places
 * It helps for arrays or list
 */

let cars=["Toyota", "Tesla", "BYD", "Lexus", "Mercedes Benz", "Chevrolet"]

export default function Wk6_1() {
  return (
    <div>
        {cars.map(item => <p>{item}</p>)}
        ==========
        {cars.map(item => (
            <p>{item}</p>
        ))}
        ==========
        {cars.map(item => {
            return(
                <p>{item}</p>
            )
        })}
    </div>
  )
}
