import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  mobile: yup.string().required("Please enter your mobile no."),
  message: yup.string(),
});

export default validationSchema;
