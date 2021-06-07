import React, { useState } from "react";
const WithHikesal = (WrappedComponent, classes) => {
  const Clickhandler = (props) => {
    const hikedsalary = props.salary + props.salary * 0.05;
    const [hsalary, setSalary] = useState(hikedsalary);
    setSalary(hikedsalary);
    console.log(hikedsalary);
    return (props) => (
      <div className={classes}>
        <WrappedComponent hikedsalary={hsalary} {...props} />
      </div>
    );
  };

  return WrappedComponent;
};

export default WithHikesal;
