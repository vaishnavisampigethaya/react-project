import React, { Component } from "react";

import Card from "../UI/Card";
import "./Persondisplay.css";
import WithHikesal from "./WithHikesal";

class Anotherdeptdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      fullname: this.props.fullname,
      salary: this.props.salary,
    };
  }

  Clickhandler = () => {
    this.setState((prevState) => {
      return { salary: this.state.salary + this.state.salary * 0.5 };
    });
  };
  render(props) {
    /*const [salary, setSalary] = useState(props.salary);
  const WithHikesal = () => {
    setSalary(salary + salary * 0.05);
    console.log(salary);
  };*/
    const { salary } = this.state;
    return (
      <Card className="person">
        <div className="description">
          <h2>{this.props.id}</h2>
          <h2>{this.props.fullname}</h2>
          <div className="price">Rs.{salary}</div>
          <button onClick={this.Clickhandler}>Hike salary 5% </button>
        </div>
      </Card>
    );
  }
}

export default Anotherdeptdetail;
