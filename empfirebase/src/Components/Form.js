import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      age: "",
      dept: "",
      salary: "",
    };
  }
  addEmpHandler = (event) => {
    event.preventDefault();
    const val = {
      id: "",
      name: "",
      age: "",
      dept: "",
      salary: "",
    };

    const empdata = {
      id1: Math.random(),
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      dept: this.state.dept,
      salary: this.state.salary,
    };
    this.props.onSub(empdata);
    console.log(empdata);
    this.setState(val);
  };
  oninputhandler = (id, event) => {
    this.setState({ [id]: event.target.value });
  };

  render() {
    return (
      <div className="h-auto bg-black py-6 flex-col justify-center sm:py-12 ">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-center text-4xl text-blue-600">
            Employee Detail Form
          </span>
          <div className="mt-4 bg-white shadow-md rounded-lg">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="px-8 py-6 text-left">
              <form method="POST" onSubmit={this.addEmpHandler}>
                <label className="block mt-4 font-semibold">
                  Employee Name
                </label>
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={this.oninputhandler.bind(this, "name")}
                  value={this.state.name}
                />
                <label className="block mt-4 font-semibold">Employee Age</label>
                <input
                  type="number"
                  placeholder="Employee Age"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={this.oninputhandler.bind(this, "age")}
                  value={this.state.age}
                />
                <label className="block mt-4 font-semibold">
                  Employee Department
                </label>
                <input
                  type="text"
                  placeholder="Employee Id"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={this.oninputhandler.bind(this, "dept")}
                  value={this.state.dept}
                />
                <label className="block mt-4 font-semibold">
                  Employee Salary
                </label>
                <input
                  type="number"
                  placeholder="Employee Salary"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={this.oninputhandler.bind(this, "salary")}
                  value={this.state.salary}
                />
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
