import React, { useState, useEffect } from "react";
import "./contact.scss";
import Axios from "axios";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import SendMessage from "../form/SendMessage";

function Contact() {
  const initialValues = { name: "", mobile: "", email: "", message: "" };
  const [formValue, setFormValue] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    Axios.post("http://localhost:5000/", formValue)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValue(initialValues);
  }

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="leftContainer">
        <div className="textContainer">
          <div
            className="firstWord bigFont"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <span className="xlFont">W</span>e
          </div>
          <div
            className="secondWord bigFont"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            invite
          </div>
          <div
            className="thirdWord bigFont"
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
            data-aos-delay="1500"
          >
            you
          </div>
          <p
            className="smallFont"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="2000"
          >
            to tell us your story
          </p>
        </div>
      </div>
      <div className="rightContainer">
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formValue.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValue.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No"
              value={formValue.mobile}
              onChange={handleChange}
            />
            <textarea
              placeholder="Tell us about your ideal wedding"
              name="message"
              value={formValue.message}
              onChange={handleChange}
            ></textarea>
            <div className="button">
              <button>Send message</button>
            </div>
          </div>
        </form>
        <SendMessage />
      </div>
    </div>
  );
}

export default Contact;
