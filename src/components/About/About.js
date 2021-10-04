import React from "react";
import AboutLogo from "../../images/learnabout.9cb058fb.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="row w-75 mx-auto py-5">
        <div className="col-12 col-md-4 col-lg-6">
          <img className="img-fluid" src={AboutLogo} alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <h5 className="custom-text-color">Education For Everyone</h5>
          <h2 className="text-muted fw-bold" style={{ fontSize: "4rem" }}>
            Learn About Our Work <br /> Culture At Devschool
          </h2>
          <p className="lead">
            As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments
            in both soul and mind for kids. We go with kids to play, learn, and grow better.
          </p>
          <div className="row">
            <div className="col-12 col-md-6">
              <li>Transportation</li>
              <li> Nutritious Food</li>
            </div>
            <div className="col-12 col-md-6">
              <li>Outdoor Games</li>
              <li>Best Care</li>
            </div>
          </div>
          <p className="lead">
            As a word from our heart, we love to dedicate for Kids the valuable things in Life . We go with kids to play, learn, and grow better.
          </p>
          <h4>
            Have a question? <span className="link-text-color">Get Started Free</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
