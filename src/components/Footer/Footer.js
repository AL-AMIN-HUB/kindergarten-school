import { faAddressBook, faClock, faMailBulk, faMinus, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg text-white p-5">
      <div className="text-center">
        <h3 style={{ fontSize: "3rem" }}>Subscribe Newsletter</h3>
        <p>Enter your email address to register to our newsletter delivered on a regular basis!</p>
        <div className="input-group mb-3 w-50 mx-auto mb-5">
          <input
            type="text"
            className="form-control fs-5"
            placeholder="Enter your e-mail number here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-success px-4 fs-5" type="button" id="button-addon2">
            SUBMIT
          </button>
        </div>
      </div>

      <div className="row container mx-auto">
        <div className="col-6 col-md-4 col-lg-4 footer-icon">
          <h3> Contact Us</h3>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> Phone: +888 01779 26 **
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faMailBulk} /> Mail: alaminsbl502@gmail.com
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faAddressBook} /> Address: 3366 Jefferson Street, NEW HAMPTON
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faClock} /> Working day: 9am - 5pm EST, Monday - Friday
          </p>
          <i className="fab fa-facebook-f p-2 fs-5  fw-bold rounded-circle me-2"></i>
          <i className="fab fa-twitter p-2 fs-5  fw-bold rounded-circle me-2"></i>
          <i className="fab fa-linkedin-in p-2 fs-5  fw-bold rounded-circle me-2"></i>
          <i className="fab fa-instagram-square p-2 fs-5  fw-bold rounded-circle me-2"></i>
        </div>
        <div className="col-6 col-md-4 col-lg-4">
          <h3>Information</h3>
          <div className="d-flex justify-content-evenly  information">
            <div>
              <NavLink className="text-white text-decoration-none fs-5" to="/home">
                <li>
                  {" "}
                  <FontAwesomeIcon className="fs-6" icon={faMinus} /> Home
                </li>
              </NavLink>
              <NavLink className="text-white text-decoration-none fs-5" to="/teachers">
                <li>
                  {" "}
                  <FontAwesomeIcon className="fs-6" icon={faMinus} /> Teachers
                </li>
              </NavLink>
              <NavLink className="text-white text-decoration-none fs-5" to="/about">
                <li>
                  {" "}
                  <FontAwesomeIcon className="fs-6" icon={faMinus} /> About Us
                </li>
              </NavLink>
            </div>
            <div>
              <NavLink className="text-white text-decoration-none fs-5" to="/contact">
                <li>
                  {" "}
                  <FontAwesomeIcon className="fs-6" icon={faMinus} /> Contact
                </li>
              </NavLink>
              <NavLink className="text-white text-decoration-none fs-5" to="*">
                <li>
                  {" "}
                  <FontAwesomeIcon className="fs-6" icon={faMinus} /> Error
                </li>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4">
          <h3>Our Gallery</h3>

          <div className="row mt-3">
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/f01KCk8/footer1-2bbc6046.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/zh1md21/footer2-21177b60.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/HVtndcv/footer3-c23504d6.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/tcs7rqX/footer4-d20e3349.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/CBBpbpg/footer5-dffb70d1.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/2qtG7b1/footer6-cf28a467.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/bbrx5K2/footer7-31d8c2ee.jpg
"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3 col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src="https://i.ibb.co/5BqNjvf/footer8-3d3e19ef.jpg
"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
