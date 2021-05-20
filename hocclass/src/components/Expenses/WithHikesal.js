import React from "react";

const WithHikesal = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        fullname: this.props.fullname,
        salary: this.props.salary,
      };
    }

    Clickhandler = () => {
      this.setState((prevState) => {
        return {
          salary: this.state.salary + this.state.salary * 0.5,
          ...this.props,
        };
      });
    };
    render(props) {
      return <OriginalComponent salary={this.state.salary} {...props} />;
    }
  }
  return NewComponent;
};

export default WithHikesal;
