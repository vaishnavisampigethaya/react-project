import React from "react";

import Card from "../UI/Card";
import "./Displaydetails.css";

const Displaydetails = (props) => {
  return (
    <Card className="emp-item">
      <div className="emp-item__description">
        <h2>{props.id}</h2>
        <h2>{props.employeeName}</h2>
        <h2>{props.age}</h2>
        <div className="emp-item__salary">Rs.{props.salary}</div>
      </div>
    </Card>
  );
};

export default Displaydetails;
