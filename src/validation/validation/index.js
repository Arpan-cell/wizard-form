const validate = (values) => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "First Name Required";
  }
  if (!values.lname) {
    errors.lname = "Last Name Required";
  }

  if (!values.phone) {
    errors.phone = "Mobile Number Required";
  } else if (values.phone && !/^([6-9]\d{9})$/i.test(values.phone)) {
    errors.phone = "Invalid mobile number, must be 10 digits";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    values.email &&
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password && !/.{8,}/i.test(values.password)) {
    errors.password = "Password must be 8 characters";
  }
  if (!values.cpassword) {
    errors.cpassword = "Confirm Password Required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Password doesn't match";
  }

  if (!values.state) {
    errors.state = "State is Required";
  }

  if (!values.city) {
    errors.city = "City is Required";
  }

  if (!values.zip) {
    errors.zip = "Zip is Required";
  }

  return errors;
};

export default validate;
