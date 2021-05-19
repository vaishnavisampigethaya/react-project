import React, { useState } from "react";
const WithHikesal = (WrappedComponent, classes) => {
  const Clickhandler = (props) => {
    const [salary, setSalary] = useState(props.salary);
    setSalary(salary + salary * 0.05);
    console.log(salary);

    return (props) => (
      <div className={classes}>
        <WrappedComponent {...props} />
      </div>
    );
  };
  return Clickhandler;
};

export default WithHikesal;
