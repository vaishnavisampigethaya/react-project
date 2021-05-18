import React from "react";
import "./app.css";
import Anotherdeptsal from "./components/Expenses/Anotherdeptsal";
import Salarydisplay from "./components/Expenses/Salarydisplay";

const App = () => {
  const expenses = [
    {
      id: "1DE",
      fullname: "vaishnavi",
      salary: 100000,
    },
    { id: "2DE", fullname: "suprabha", salary: 50000 },
    {
      id: "3DE",
      fullname: "ashwini",
      salary: 35000,
    },
  ];

  const testing = [
    {
      id: "1TE",
      fullname: "Tejaswini shreedhar gouda",
      salary: 10000,
    },
    { id: "2TE", fullname: "Akhila", salary: 50000 },
    {
      id: "3TE",
      fullname: "Pavithra",
      salary: 35000,
    },
  ];

  return (
    <div>
      <h2>Salary Hike</h2>
      <h3>Development Department</h3>
      <Salarydisplay items={expenses} />
      <h3>Testing Department</h3>
      <Anotherdeptsal items={testing} />
    </div>
  );
};

export default App;
