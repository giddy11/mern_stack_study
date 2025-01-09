import React, { Component } from 'react';

class Buttoncomp extends Component {
    // ButtonComp is a child of Component
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <p>{this.props.subcontent}</p>
                <button onClick={this.props.funcHandler}>Show Alert</button>
            </div>
        );
    }
}

export default Buttoncomp;