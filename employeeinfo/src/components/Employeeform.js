import React, { useState } from "react";
import "./Employeeform.css";
function Employeeform(props) {
  const [id, setid] = useState("");
  const [employeeName, setemployeeName] = useState("");
  const [age, setage] = useState("");
  const [salary, setsalary] = useState("");
  const idhandler = (event) => {
    //console.log(event.target.value);
    setid(event.target.value);
  };
  const namehandler = (event) => {
    //console.log(event.target.value);
    setemployeeName(event.target.value);
  };
  const agehandler = (event) => {
    //console.log(event.target.value);
    setage(event.target.value);
  };
  const salaryhandler = (event) => {
    //console.log(event.target.value);
    setsalary(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    const empdata = {
      id1: Math.random().toString(),
      id: id,
      employeeName: employeeName,
      age: age,
      salary: salary,
    };
    props.onaddEmployee(empdata);
    console.log(empdata);
    setemployeeName("");
    setage("");
    setsalary("");
    setid("");
  };

  return (
    <div>
      <div className="form-group">
        <h2>Employee Form</h2>
        <form onSubmit={submithandler}>
          <div className="form-elements">
            <label>Employee Id: </label>
            <input type="number" name="id" value={id} onChange={idhandler} />
          </div>
          <div className="form-elements">
            <label>Employee Name: </label>
            <input
              type="text"
              name="employeeName"
              value={employeeName}
              onChange={namehandler}
            />
          </div>
          <div className="form-elements">
            <label>Age:</label>
            <input type="number" name="age" value={age} onChange={agehandler} />
          </div>
          <div className="form-elements">
            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={salary}
              onChange={salaryhandler}
            />
          </div>
          <div className="form-elements">
            <button type="submit">Add Employee</button>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Employeeform;
