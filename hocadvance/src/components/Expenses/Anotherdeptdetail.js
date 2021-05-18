import React from "react";

import Card from "../UI/Card";
import "./Persondisplay.css";

const Anotherdeptdetail = (props) => {
  return (
    <Card className="person">
      <div className="description">
        <h2>{props.id}</h2>
        <h2>{props.fullname}</h2>
        <div className="price">Rs.{props.salary}</div>
      </div>
    </Card>
  );
};

export default Anotherdeptdetail;
