import React, { Component } from 'react';

export default class TestClass2 extends Component
{
    render() {
        return (
            <div>
               <h3>props demo2 using Class Component</h3> 
               Location: {this.props.location}
               <h4>Student Object</h4>
               ID: {this.props.student.id}<br/>
               NAME: {this.props.student.name}<br/>
               STATUS: {this.props.student.status}<br/>
            </div>
        );
    }
}
