import React from "react";
import "./app.css";
import Salarydisplay from "./components/Expenses/Salarydisplay";

const App = () => {
  const expenses = [
    {
      id: 1,
      fullname: "vaishnavi",
      salary: 100000,
    },
    { id: 2, fullname: "suprabha", salary: 50000 },
    {
      id: 3,
      fullname: "ashwini",
      salary: 35000,
    },
  ];
  return (
    <div>
      <h2>Salary Hike</h2>
      <Salarydisplay items={expenses} />
    </div>
  );
};

export default App;
