import React from 'react'

export default function Custom_button(props, showMe="hi") {
    let class_name = `${props.cusClass} fw-bold`

    if (props.showNavigation == true){
        return (
            <div className={class_name}>
                   # {props.content} {">>>"}
                   {showMe}
            </div>
          )
    } else {
        return (
            <div className={class_name}>
                   # {props.content}
                   {showMe}

            </div>
          )
    }
  
}
