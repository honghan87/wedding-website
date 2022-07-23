const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Please enter your name"
    }
    if (!values.email) {
      errors.email = "Please enter your email"
    } else if (!regex.test(values.email)){
      errors.email = "Please enter a valid email"
    }
    if (!values.mobile) {
      errors.mobile = "Please enter your mobile number"
    }
    return errors;
  }

export default validate;