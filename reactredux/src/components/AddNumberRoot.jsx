import React, { Component } from "react";
import AddNumber from "./AddNumber";
export default class AddNumberRoot extends Component {
  handleClick = (size) => {
    this.props.onClick(size);
  };

  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onClick={this.handleClick}></AddNumber>
      </div>
    );
  }
}
