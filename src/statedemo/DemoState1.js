import React, { Component } from 'react';

class DemoState1 extends Component 
{
    constructor()
    {
        super()
        this.state={id:100,name:"KLEF"}
    }

    render() 
    {
        return (
            <div>
                <h3>state object demo 1</h3>
                ID: {this.state.id}<br/>
                NAME: {this.state.name}<br/>
            </div>
        );
    }
}

export default DemoState1;
