import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";
import {
  Button,
  Card,
  CardBody,
  Col,
} from "reactstrap";

const PersonalDetailsForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
          <Field
              name="state"
              type="text"
              component={FormInput}
              label="State *"
              inputPlaceHolder="Enter State"
            />

            <Field
              name="city"
              type="text"
              component={FormInput}
              label="City *"
              inputPlaceHolder="Enter City"
            />

            <Field
              name="zip"
              type="number"
              component={FormInput}
              label="Zip"
              inputPlaceHolder="Enter Zip"
            />
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              color="primary"
              className="btn-pill pull-left"
              onClick={previousPage}
              style={{ marginLeft: "20px" }}
            >
              <i className="fa fa-chevron-left" />
              &nbsp; Previous
            </Button>
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Next
              
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalDetailsForm);
