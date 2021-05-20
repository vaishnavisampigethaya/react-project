import React, { Component } from "react";

import Card from "../UI/Card";
import "./Persondisplay.css";
import WithHikesal from "./WithHikesal";

class Anotherdeptdetail extends Component {
  render(props) {
    const { salary, Clickhandler } = this.props;
    const { id } = this.props;
    const { fullname } = this.props;
    return (
      <Card className="person">
        <div className="description">
          <h2>{id}</h2>
          <h2>{fullname}</h2>
          <div className="price">Rs.{salary}</div>
          <button onClick={Clickhandler}>Hike salary 5% </button>
        </div>
      </Card>
    );
  }
}

export default WithHikesal(Anotherdeptdetail);
