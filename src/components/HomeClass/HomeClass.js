import { faBook, faLocationArrow, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeClass = (props) => {
  // console.log(props.class);
  const { className, price, lesson, students, location, Thumb } = props.class;
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
      </div>
    </div>
  );
};

export default HomeClass;
