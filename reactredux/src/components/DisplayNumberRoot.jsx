import React, { Component } from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    );
  }
}
