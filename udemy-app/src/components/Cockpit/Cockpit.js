import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = {};
  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red);
  }

  console.log(props.persons.length);
  console.log(classes);

  return (
    <div className={classes.Cockpit}>
      <h1> Hi, I am a react app. </h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
