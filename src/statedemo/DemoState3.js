import React, { Component } from 'react';

class DemoState3 extends Component 
{

    constructor()
    {
        super()
        this.state = {count:0} //count is a property 
    }

    increment = () => {
        this.setState( {count:this.state.count+1})
    }

    decrement = () => {
        this.setState( {count:this.state.count-1})
    }

    render() {
        return (
            <div>
                <h3>state object demo 3</h3>
                <h4><u>Counter App</u></h4>
                COUNT={this.state.count}<br/>
                <button onClick={this.increment}>INCREMENT</button>
                <button onClick={this.decrement}>DECREMENT</button>
            </div>
        );
    }
}

export default DemoState3;
