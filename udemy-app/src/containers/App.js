import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Radium from "radium";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "asd1", name: "Max", age: 28 },
      { id: "213a", name: "Manu", age: 29 },
      { id: "sdds", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    let assignedClasses = [];
    let btnClass = {};
    if (this.state.showPersons) {
      btnClass = "red";
    }

    if (this.state.persons.length <= 2) {
      assignedClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push("red");
    }

    console.log(this.state.showPersons);

    return (
      <div className="App">
        <h1> Hi, I am a react app. </h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

/*
state = {
  persons: [
    { name: "Max", age: 28 },
    { name: "Manu", age: 29 },
    { name: "Stephanie", age: 26 },
  ],
  otherState: "other value",
};

// event handler
switchNameHandler = () => {
  this.setState({
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 27 },
    ],
  });
};
*/
