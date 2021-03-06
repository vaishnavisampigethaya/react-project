import React from "react";

import Card from "../UI/Card";
import "./Persondisplay.css";
import WithHikesal from "./WithHikesal";
const Persondetail = (props) => {
  /* const [salary, setSalary] = useState(props.salary);
  const WithHikesal = () => {
    setSalary(salary + salary * 0.05);
    console.log(salary);
  };*/
  console.log(props);
  return (
    <Card className="person">
      <div className="description">
        <h2>{props.id}</h2>
        <h2>{props.fullname}</h2>
        <div className="price">Rs.{props.salary}</div>
        <button onClick={WithHikesal.Clickhandler}>Hike salary 5% </button>
      </div>
    </Card>
  );
};

export default WithHikesal(Persondetail, "myclass");
