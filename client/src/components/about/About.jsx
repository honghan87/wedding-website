import React from "react";
import { aboutUs } from "../../data/menuLink";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="aboutTextContainer">
        <div className="aboutText">
          <h1>About Us</h1>
          <p>
            <strong>Moments</strong> was founded by two sister (in-laws), Tricia
            & Evelyn, who have all the intention to collate their ideas and
            inspirations to bring greater good to the world and make people
            happy. Both graduated with non-wedding planning degrees, and it was
            not until their respective weddings that they were inspired to start
            this.
          </p>
          <p>
            Being in your shoes before, we truly understand your wishes, and can
            easily integrate your vision with our expertise to create a truly
            unique moment. It is a privilege to create beauty and experience joy
            alongside a whole list of amazing vendors and call this work.
            Indeed, we are truly blessed! :)
          </p>
        </div>
      </div>
      <div className="aboutPictureSection">
        <div className="aboutText">
          <h1>Get to know Us!</h1>
        </div>
        <div className="aboutPictureContainer">
          {aboutUs.map((aboutPicture) => (
            <div className="aboutPicture" key={aboutPicture.id}>
              <img src={aboutPicture.link} alt="person" />
              <div className="aboutText left">
                <h1>{aboutPicture.name}</h1>
                <p>{aboutPicture.firstPara}</p>
                <p>{aboutPicture.secondPara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
