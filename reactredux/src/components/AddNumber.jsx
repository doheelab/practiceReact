import React, { Component } from "react";

export default class AddNumber extends Component {
  state = { size: 0 };
  handleClick = () => {
    this.props.onClick(this.state.size);
  };

  handleChange = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={this.handleClick}></input>
        <input
          type="text"
          value={this.state.size}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
