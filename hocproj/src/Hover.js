import React, { Component } from "react";
import withCounter from "./withCounter";
import "./Btn.css";
class Hover extends Component {
  render() {
    const { count, incrementc } = this.props;
    return (
      <div className="text-n">
        <h2 onMouseOver={incrementc}>Hovered {count} time</h2>
      </div>
    );
  }
}
export default withCounter(Hover);
