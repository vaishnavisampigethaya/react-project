import { Component } from "react";
export default class Keypad extends Component {
  btnpressed = (e) => {
    this.props.btnpressed(e.target.name);
  };
  render() {
    return (
      <div className="Buttons">
        <button name="(" onClick={this.btnpressed}>
          (
        </button>
        <button name="C" onClick={this.btnpressed}>
          C
        </button>
        <button name="CE" onClick={this.btnpressed}>
          CE
        </button>
        <button name=")" onClick={this.btnpressed}>
          )
        </button>
        <button name="1" onClick={this.btnpressed}>
          1
        </button>
        <button name="2" onClick={this.btnpressed}>
          2
        </button>
        <button name="3" onClick={this.btnpressed}>
          3
        </button>
        <button name="+" onClick={this.btnpressed}>
          +
        </button>
        <button name="4" onClick={this.btnpressed}>
          4
        </button>
        <button name="5" onClick={this.btnpressed}>
          5
        </button>
        <button name="6" onClick={this.btnpressed}>
          6
        </button>
        <button name="-" onClick={this.btnpressed}>
          -
        </button>
        <button name="7" onClick={this.btnpressed}>
          7
        </button>
        <button name="8" onClick={this.btnpressed}>
          8
        </button>
        <button name="9" onClick={this.btnpressed}>
          9
        </button>
        <button name="*" onClick={this.btnpressed}>
          *
        </button>
        <button name="0" onClick={this.btnpressed}>
          0
        </button>
        <button name="." onClick={this.btnpressed}>
          .
        </button>

        <button name="/" onClick={this.btnpressed}>
          /
        </button>
        <button name="=" onClick={this.btnpressed}>
          =
        </button>
      </div>
    );
  }
}
