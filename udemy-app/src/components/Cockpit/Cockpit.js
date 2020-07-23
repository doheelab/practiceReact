import React, { useEffect } from "react";
import "./Cockpit.css";
import Radium from "radium";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let assignedClasses = [];

  const style = {
    border: "1px solid blue",
    padding: "16px",
    backgroundColor: "green",
    font: "inherit",
    color: "white",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  if (props.showPersons) {
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black",
    };
  }

  if (props.personsLength <= 2) {
    assignedClasses.push("red");
  }
  if (props.personsLength <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className={"Cockpit"}>
      <h1> {props.title} </h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={style} onClick={props.clicked}>
        Toggle person
      </button>
    </div>
  );
};

export default React.memo(Radium(Cockpit));
