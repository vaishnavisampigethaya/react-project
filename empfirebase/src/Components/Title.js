import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div>
        <div className=" text-black ">
          <h1 className="text-center text-4xl text-indigo-600 ">
            Employee Detail Table
          </h1>
          <div className="flex-col px-5 bg-purple-600 m-8  max-w-96 justify-between rounded-xl h-12 text-white ">
            <div className="grid gap-x-8 gap-y-4 grid-cols-7  text-center justify-self-start py-3">
              <div>Employee Id</div>
              <div>Employee Name</div>
              <div>Employee Age</div>
              <div>Department</div>
              <div>Employee Salary</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
