import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      age: props.data.age,
      dept: props.data.dept,
      salary: props.data.salary,
      openModal: props.openModal,
    };
  }
  cancelHandler = (event) => {
    if (window.confirm("Are you want to cancel the edit?"))
      this.setState({ openModal: !this.props.openModal });
    this.props.empcancel();
  };

  addEmpHandler = (event) => {
    event.preventDefault();
    if (
      this.state.name == "" ||
      this.state.age == "" ||
      this.state.dept == "" ||
      this.state.salary == ""
    ) {
      alert("Fill all the fields");
    } else if (!isNaN(this.state.name) || !isNaN(this.state.dept)) {
      alert("Enter proper details in Employee Name or Employee Department");
    } else if (this.state.age <= 14) {
      alert(
        "Employment of children below 14 and 15 years in certain prohibited under ACT 61 OF 1986"
      );
    } else if (this.state.salary <= 0) {
      alert("Enter the correct salary. Salary should be greater than zero");
    } else {
      const val = {
        name: "",
        age: "",
        dept: "",
        salary: "",
      };
      const empdata = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        dept: this.state.dept,
        salary: this.state.salary,
        openModal: this.state.openModal,
      };
      this.props.onSub(empdata);
      console.log(empdata);
      this.setState(val);
    }
  };
  oninputhandler = (id, event) => {
    this.setState({ [id]: event.target.value });
  };
  render() {
    return (
      <div className="bg-black max-h-full">
        <div className="relative py-3 sm:w-96 mx-auto text-center max-h-full align-middle content-center">
          <div className="mt-4 bg-white shadow-md rounded-lg">
            <span className="text-center text-4xl text-blue-600">
              Edit details
            </span>
            <button
              className="text-right p-3 text-4xl content-end"
              onClick={this.cancelHandler}
            >
              X
            </button>
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="px-8 py-6 text-left">
              <form method="POST">
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
                  placeholder="Employee Department"
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
                    onClick={this.addEmpHandler}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
                    onClick={this.cancelHandler}
                  >
                    Cancel
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
