import React from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="address">
          <p>
            <strong>OUR ADDRESS:</strong>
            <br />
            Moments To Remember Sdn Bhd
            <br />
            (1080476-T)
            <br />
            16, Jalan SS15/2B,
            <br />
            Subang Jaya,
            <br />
            47500 Petaling Jaya,
            <br />
            Selangor, Malaysia.
            <br />
          </p>
          <div>
            <a href="http://goo.gl/maps/lBJzt">Google Maps</a> |{" "}
            <a href="waze://?ll=3.081120,101.587641&amp;navigate=yes">Waze</a>
          </div>
        </div>

        <div className="footerSocial">
          <p>
            <strong>FOLLOW US</strong>
          </p>
          <span>
            <a href="https://www.facebook.com/MomentsTR">
              <FaFacebook />
            </a>{" "}
          </span>
          <span>
            <a href="https://www.instagram.com/momentswedd/">
              <FaInstagram />
            </a>{" "}
          </span>
        </div>
        <p>&copy; {currentYear} Moments To Remember Sdn Bhd</p>
      </div>
    </div>
  );
}

export default Footer;

// <p>We would love to talk with you more about your event and help determine how we can best make the planning process an amazing and fun experience for you! So, drop us a note today for a complimentary consultation so we can begin telling your story!</p>
//   <p>
//     <strong>EMAIL:</strong>
//     <br />
//     hello@moments.my
//   </p>
