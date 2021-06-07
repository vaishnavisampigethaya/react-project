import React from "react";
import Displaydetails from "./Displaydetail";
import Card from "../UI/Card";
function Employeedetails(props) {
  return (
    <Card className="employee">
      {props.items.map((empdata) => (
        <Displaydetails
          key={empdata.id}
          id={empdata.id}
          employeeName={empdata.employeeName}
          age={empdata.age}
          salary={empdata.salary}
        />
      ))}
    </Card>
  );
}
export default Employeedetails;
