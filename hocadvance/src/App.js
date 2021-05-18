import logo from "./logo.svg";
import "./App.css";
import Development from "./Development";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Development />
      </div>
    );
  }
}

export default App;
