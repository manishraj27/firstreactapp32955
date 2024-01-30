import React from "react";
import { render } from '@testing-library/react';

export default class TestClass1 extends React.Component
{
    render()
    {
        return(
            <div>
                <h3>props demo1 using Class Component</h3>
                ID: {this.props.id}<br/>
                NAME: {this.props.name}<br/>
            </div>
        )
    }
}