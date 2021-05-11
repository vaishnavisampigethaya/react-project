import "./App.css";
import { Component } from "react";
import Keypad from "./Keypad";
import Output from "./Output";

class App extends Component {
  state = {
    result: "",
  };
  btnpressed = (btnname) => {
    if (btnname === "=") {
      this.calculate();
    } else if (btnname === "C") {
      this.reset();
    } else if (btnname === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + btnname,
      });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.state.result} />
          <Keypad btnpressed={this.btnpressed} />
        </div>
      </div>
    );
  }
}

export default App;
