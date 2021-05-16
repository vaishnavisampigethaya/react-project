import "./App.css";
import Btn from "./Btn";
import Hover from "./Hover";
import "./Btn.css";
import React, { Component, useState } from "react";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Btn />
        <Hover />
      </div>
    );
  }
}

export default App;
