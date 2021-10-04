import { faLocationArrow, faUser, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { className, price, lesson, students, location, Thumb } = props.service;
  return (
    <div className="col-md-4 my-3">
      <div className="card h-100 p-2 border-0 shadow service-card">
        <img className="img-fluid" src={Thumb} alt="" />
        <h4> {className} </h4>
        <div className="row">
          <div className="col-md-6">
            <p>
              {" "}
              <FontAwesomeIcon icon={faBook} /> {lesson}{" "}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              {" "}
              <FontAwesomeIcon icon={faUser} /> {students}{" "}
            </p>
          </div>
        </div>
        <p className="d-flex justify-content-between">
          <small>
            {" "}
            <FontAwesomeIcon icon={faLocationArrow} /> {location}{" "}
          </small>
          <small className="lead">$ {price}</small>
        </p>
        <NavLink to="/contact">
          <button className="fs-5 btn btn-danger">Enroll Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
