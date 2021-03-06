import "./index.css";
import "./App.css";
import Form from "./Components/Form";
import Modal from "./Components/Modal";
import Title from "./Components/Title";
import Display from "./Components/Display";
import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Emp: [],
      openModal: false,
      update: [],
    };
  }
  cancelhandle = () => {
    this.setState({ openModal: !this.state.openModal });
    toast.info("Modal(Form) Closed");
  };
  updateHandelr = (data) => {
    const val = {
      name: data.name,
      age: data.age,
      dept: data.dept,
      salary: data.salary,
    };
    axios
      .put(
        `https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post/${data.id}.json`,
        val
      )
      .then((response) => {
        this.getData();
      });
    this.setState({
      Emp: this.state.Emp.filter((Emp) => Emp.id !== data.id),
      openModal: !this.state.openModal,
    });
    toast.success("Employee detail updated Succesfully");
  };
  onEmpupdate = (id, data, e) => {
    this.setState({ openModal: true, update: data });
  };
  onEmpdelete = (id, e) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(
          `https://employeeinfo-ee0c3-default-rtdb.firebaseio.com/post/${id}.json`
        )
        .then((response) => {
          this.getData();
        });
      this.setState({
        Emp: this.state.Emp.filter((Emp) => Emp.id !== id),
      });
      toast.error("Employee Detail is Deleted Succesfully!!!");
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
    toast.success("Employee detail added Succesfully");
  };
  getData = () => {
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
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="bg-black">
        {!this.state.openModal && (
          <Form onSub={this.empHandelr} key={Math.random()} />
        )}
        {!this.state.openModal && <Title />}
        {!this.state.openModal &&
          this.state.Emp.map((post, index) => {
            return (
              <Display
                key={post.id}
                item={post}
                modal={this.state.openModal}
                empdelete={this.onEmpdelete.bind(this, post.id)}
                empupdate={this.onEmpupdate.bind(this, post.id, post)}
              />
            );
          })}

        {this.state.openModal && (
          <Modal
            onSub={this.updateHandelr}
            data={this.state.update}
            empcancel={this.cancelhandle.bind(this)}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}
