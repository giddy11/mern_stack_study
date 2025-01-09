import React from 'react'

export default function Component_two(props) {
 let contentNumber = props.counter; 
 let contentDigit = props.digit;
 return (   
    <div>
        <h1 className='Head'>
            Header {contentNumber}
        </h1>

        <p>
            This is Comp Content {contentDigit}
        </p>
    </div>
  )
}
