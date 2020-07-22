import React from "react";
import "./Cockpit.css";

const Cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = {};
  if (props.showPersons) {
    btnClass = "red";
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("red");
  }

  return (
    <div className={"Cockpit"}>
      <h1> Hi, I am a react app. </h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
