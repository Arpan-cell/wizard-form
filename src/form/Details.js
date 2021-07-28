import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";
import { mobile, captialize } from "../validation/normalize";
import { Button, Card, CardBody, Col} from "reactstrap";

const GeneralForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
         
            <Field
              name="fname"
              type="text"
              component={FormInput}
              label="First Name *"
              inputPlaceHolder="Enter First Name"
              normalize={captialize}
            />
            <Field
              name="lname"
              type="text"
              component={FormInput}
              label="Last Name *"
              inputPlaceHolder="Enter Last Name"
              normalize={captialize}
            />
           
           
            <Field
              name="phone"
              type="text"
              component={FormInput}
              label="Mobile No *"
              inputPlaceHolder="+91"
              normalize={mobile}
            />
            <Field
              name="email"
              type="text"
              component={FormInput}
              label="Email *"
              inputPlaceHolder="Enter Email Address"
              normalize={captialize}
            />
            <Field
              name="password"
              type="password"
              component={FormInput}
              label="Password *"
              inputPlaceHolder="Enter Password"
              normalize={captialize}
            />
            <Field
              name="cpassword"
              type="password"
              component={FormInput}
              label="Confirm Password *"
              inputPlaceHolder="Enter Confirm Password"
              normalize={captialize}
            />
            
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
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

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GeneralForm);
