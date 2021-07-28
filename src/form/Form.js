import React, { Component } from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";
import { Card } from "reactstrap";
import Details from "./Details";
import Address from "./Address";
import Submission from "./Submission";

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        { title1: "Name" },
        { title2: "Address" },
        { title3: "Submission" },
      ],
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && <Details onSubmit={this.nextPage} />}
        {page === 1 && (
          <Address previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 2 && (
          <Submission previousPage={this.previousPage} onSubmit={onSubmit} />
        )}
      </Card>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
