import React, { Component } from "react";

class TestClass3 extends Component {
  render() 
  {
    return (
      <div>
        <h3>props demo3 using Class Component</h3>
        <h4>Products List</h4>

        <ul>
          {this.props.myproducts.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestClass3;
