import "./index.css";
import "./App.css";
import Form from "./Components/Form";
import Display from "./Components/Display";
import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Emp: [],
    };
  }
  onEmpdelete = (id, e) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(
          `https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post/${id}.json`
        )
        .then((response) => {
          axios
            .get(
              "https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post.json"
            )
            .then((response) => {
              const emp = [];
              for (let key in response.data) {
                emp.push({ ...response.data[key], id: key });
              }
              console.log(response);
              this.setState({ Emp: emp });
            });
        });
    }
  };
  empHandelr = (empdata) => {
    const po = [...this.state.Emp];
    po.push(empdata);
    this.setState({ Emp: po });
    axios
      .post(
        "https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post.json",
        empdata
      )
      .then((response) => {});
  };
  componentDidMount() {
    axios
      .get("https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post.json")
      .then((response) => {
        const emp = [];
        for (let key in response.data) {
          emp.push({ ...response.data[key], id: key });
        }
        console.log(response);
        this.setState({ Emp: emp });
      });
  }

  render() {
    return (
      <div className="bg-black">
        <Form onSub={this.empHandelr} key={Math.random()} />
        <div className=" text-black ">
          <h1 className="text-center text-4xl text-indigo-600 ">
            Employee Detail Table
          </h1>
          <div className="flex-col px-5 bg-purple-600 m-8  max-w-96 justify-between rounded-xl h-12 text-white ">
            <div className="grid gap-x-8 gap-y-4 grid-cols-6  text-center justify-self-start py-3">
              <div>Employee Id</div>
              <div>Employee Name</div>
              <div>Employee Age</div>
              <div>Department</div>
              <div>Employee Salary</div>
            </div>
          </div>
        </div>
        {this.state.Emp.map((post, index) => {
          return (
            <Display
              key={post.id}
              item={post}
              empdelete={this.onEmpdelete.bind(this, post.id)}
            />
          );
        })}
      </div>
    );
  }
}
