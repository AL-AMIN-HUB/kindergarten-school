import React from "react";
import Register from "../../images/whyregister.e3bc4c4e.jpg";
import Trainer from "../../images/train.png";
import Lesson from "../../images/lesson.png";
import Book from "../../images/book.png";

const Registered = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 py-5">
      <div>
        <img className="h-100" src={Register} alt="" />
      </div>
      <div className="training-bg-color text-white p-5">
        <h5>Why Hesitate To Register?</h5>
        <h2 style={{ fontSize: "3rem" }}>
          We Are The Best Choice <br /> For Your Child
        </h2>
        <p className="lead">
          As a word from our heart, we love to dedicate for Kids the valuable things in Life. <br /> A great education is a must for a solid
          developments in both soul and mind for kids. <br /> We go with kids to play, learn, and grow better.
        </p>
        <div className="d-flex  align-items-center mt-2">
          <div className="bg-light p-3 rounded-circle me-3">
            <img src={Trainer} alt="" />
          </div>
          <div>
            <h5>Well Trained Professionals</h5>
            <p>
              <small>
                Enabling humanoid robot movement <br /> with imitation learning and mimicking of animal behaviors
              </small>
            </p>
          </div>
        </div>{" "}
        <div className="d-flex  align-items-center mt-2">
          <div className="bg-light p-3 rounded-circle me-3">
            <img src={Lesson} alt="" />
          </div>
          <div>
            <h5>International Lesson Patterns </h5>
            <p>
              <small>Summer of the SPAC, Adam Neumann returns and the Nissan Ariya debuts</small>
            </p>
          </div>
        </div>{" "}
        <div className="d-flex  align-items-center mt-2">
          <div className="bg-light p-3 rounded-circle me-3">
            <img src={Book} alt="" />
          </div>
          <div>
            <h5>Awesome Infra-Structure</h5>
            <p>
              <small>
                Ready, set, network! CrunchMatch is now open for <br /> Early Stage 2020
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registered;
