import React, { useState } from "react";
import validationSchema from "./ValidationSchema";
import { useFormik } from "formik";
import Axios from "axios";

function SendMessage() {
  const [success, setSuccess] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);
    const { ...data } = values;
    const response = await Axios.post("http://localhost:5000/", data).catch(
      (err) => {
        if (err && err.response) {
          console.log(err);
        }
      }
    );

    if (response && response.data) {
      setSuccess(response.data.message);
      console.log("sent!");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div className="rightContainer">
      <form onSubmit={formik.handleSubmit}>
        <div className="formContainer">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
          <textarea
            placeholder="Tell us your ideal wedding"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
          <div className="button">
            <button type="submit">Send message</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
