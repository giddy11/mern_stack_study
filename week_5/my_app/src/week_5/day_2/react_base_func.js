import React, { Component } from 'react'

export default class React_base_func extends Component {
  render() {
    let class_name = `${this.props.cusClass} fw-bold`

    if (this.props.showNavigation == true){
        return (
            <div className={class_name}>
                   # {this.props.content} {">>>"}
                   {this.showMe}

            </div>
          )
    } else {
        return (
            <div className={class_name}>
                   # {this.props.content}
                   {this.showMe}
            </div>
          )
    }
  }
}
