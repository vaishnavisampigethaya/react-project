import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      name: this.props.item.name,
      age: this.props.item.age,
      dept: this.props.item.dept,
      salary: this.props.item.salary,
      openModal: this.props.modal,
    };
  }

  render() {
    return (
      <div className="response text-white ">
        <div className="flex-col px-5 bg-blue-600 m-8 max-w-full justify-between rounded-xl h-15 shadow-md ">
          <div className="grid gap-x-8 gap-y-4 grid-cols-7 text-center justify-self-start py-3">
            <div>{this.state.id}</div>
            <div>{this.state.name}</div>
            <div>{this.state.age}</div>
            <div>{this.state.dept}</div>
            <div>Rs.{this.state.salary}</div>
            <div>
              <button
                className="response bg-indigo-900 text-center rounded-md border-2 border-white w-48"
                onClick={this.props.empupdate}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                className="response bg-indigo-900 text-center rounded-md border-2 border-white w-48"
                onClick={this.props.empdelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
