import React, { Component } from "react";
import withCounter from "./withCounter";
import "./Btn.css";
class Btn extends Component {
  render() {
    const { count, incrementc } = this.props;
    return (
      <div className="butn">
        <button onClick={incrementc}>Click {count} times</button>
      </div>
    );
  }
}
export default withCounter(Btn);
