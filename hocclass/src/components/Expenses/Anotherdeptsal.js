import React, { Component } from "react";

import Card from "../UI/Card";
import "./saldisplay.css";
import Anotherdeptdetail from "./Anotherdeptdetail";

class Anotherdeptsal extends Component {
  render(props) {
    return (
      <Card className="salary">
        <Anotherdeptdetail
          id={this.props.items[0].id}
          fullname={this.props.items[0].fullname}
          salary={this.props.items[0].salary}
        />
        <Anotherdeptdetail
          id={this.props.items[1].id}
          fullname={this.props.items[1].fullname}
          salary={this.props.items[1].salary}
        />
        <Anotherdeptdetail
          id={this.props.items[2].id}
          fullname={this.props.items[2].fullname}
          salary={this.props.items[2].salary}
        />
      </Card>
    );
  }
}
export default Anotherdeptsal;
