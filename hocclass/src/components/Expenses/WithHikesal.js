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
      console.log("HI");
      this.setState((prevState) => {
        return { salary: this.state.salary + this.state.salary * 0.05 };
      });
    };

    render(props) {
      return (
        <OriginalComponent
          salary={this.state.salary}
          {...this.state}
          Clickhandler={this.Clickhandler}
        />
      );
    }
  }
  return NewComponent;
};

export default WithHikesal;
