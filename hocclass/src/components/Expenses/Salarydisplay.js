import React, { Component } from "react";

import Card from "../UI/Card";
import "./saldisplay.css";
import Persondetail from "./Persondetail";

class Salarydisplay extends Component {
  render(props) {
    return (
      <Card className="salary">
        <Persondetail
          id={this.props.items[0].id}
          fullname={this.props.items[0].fullname}
          salary={this.props.items[0].salary}
        />
        <Persondetail
          id={this.props.items[1].id}
          fullname={this.props.items[1].fullname}
          salary={this.props.items[1].salary}
        />
        <Persondetail
          id={this.props.items[2].id}
          fullname={this.props.items[2].fullname}
          salary={this.props.items[2].salary}
        />
      </Card>
    );
  }
}
export default Salarydisplay;
