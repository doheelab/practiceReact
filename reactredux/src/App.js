import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends Component {
  state = { number: 0 };
  handleClick = (size) => {
    this.setState({ number: this.state.number + Number(size) });
  };

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={this.handleClick}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
