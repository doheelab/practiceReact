import React, { Component } from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a Paaerson! {props.name}</p>
      <p>{props.children}</p>
      <input type="type" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
