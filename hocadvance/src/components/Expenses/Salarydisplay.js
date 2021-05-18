import React from "react";

import Card from "../UI/Card";
import "./saldisplay.css";
import Persondetail from "./Persondetail";

const Salarydisplay = (props) => {
  return (
    <Card className="salary">
      <Persondetail
        id={props.items[0].id}
        fullname={props.items[0].fullname}
        salary={props.items[0].salary}
      />
      <Persondetail
        id={props.items[1].id}
        fullname={props.items[1].fullname}
        salary={props.items[1].salary}
      />
      <Persondetail
        id={props.items[2].id}
        fullname={props.items[2].fullname}
        salary={props.items[2].salary}
      />
    </Card>
  );
};
export default Salarydisplay;
