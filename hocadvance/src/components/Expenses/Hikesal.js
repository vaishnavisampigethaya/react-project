import React, { useState } from "react";
const Hikesal = (WrappedComponent, classes) => {
  const [salary, setSalary] = useState(props.salary);

  setSalary(salary + salary * 0.05);
  console.log(salary);

  return () => (
    <div className={classes}>
      <WrappedComponent data={salary} {...props} />
    </div>
  );
};
export default Hikesal;
