import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm a Paaerson! {this.props.name}</p>
        <p>{this.props.children}</p>
        <input
          type="type"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
