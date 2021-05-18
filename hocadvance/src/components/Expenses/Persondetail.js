import React, { useState } from "react";

import Card from "../UI/Card";
import "./Persondisplay.css";
import Hikesal from "./Hikesal";

const Persondetail = (props) => {
  const [salary, setSalary] = useState(props.salary);
  const Hikesal = () => {
    setSalary(salary + salary * 0.05);
    console.log(salary);
  };
  return (
    <Card className="person">
      <div className="description">
        <h2>{props.id}</h2>
        <h2>{props.fullname}</h2>
        <div className="price">Rs.{props.salary}</div>
        <button onClick={Hikesal}>Hike salary 5% </button>
      </div>
    </Card>
  );
};

export default Hikesal(Persondetail, "myclass");
