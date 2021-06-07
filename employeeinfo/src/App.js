import "./App.css";
import React, { useState } from "react";
import Employeeform from "./components/Employeeform";
import Employeedetails from "./components/Employeedetails";
const Employee = [
  {
    id: 1,
    employeeName: "Vaishnavi",
    age: 21,
    salary: 1200000,
  },
];

function App() {
  const [Employee1, setEmployee1] = useState(Employee);

  const addEmployeehandler = (empdata) => {
    setEmployee1((prevEmployee1) => {
      return [...prevEmployee1, empdata];
    });
  };
  console.log(Employee1);
  return (
    <div className="App">
      <h1>Employee Information System</h1>

      <Employeeform onaddEmployee={addEmployeehandler}></Employeeform>
      <Employeedetails items={Employee1}></Employeedetails>
    </div>
  );
}

export default App;
