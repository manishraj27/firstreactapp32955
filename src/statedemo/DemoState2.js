import React, { Component } from 'react';

class DemoState2 extends Component 
{
    constructor()
    {
        super()
        this.state={location:"GUNTUR"}
    }

    change = () => {
        this.setState( {location:"MUMBAI"} )
    }

    render() {
        return (
            <div>
                <h3>state object demo 2</h3>
                Location={this.state.location}<br/>
                <button onClick ={this.change}>Change Location</button>
            </div>

        );
    }
}

export default DemoState2;
