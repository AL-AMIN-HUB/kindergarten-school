import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeClass from "../HomeClass/HomeClass";
import "./HomeService.css";

const HomeService = () => {
  const [homeService, setHomeService] = useState([]);

  useEffect(() => {
    fetch("./homeServices.JSON")
      .then((res) => res.json())
      .then((data) => setHomeService(data));
  }, []);
  return (
    <div className="row container mx-auto mt-5">
      <div className="col-md-12 text-center">
        <h5 className="custom-text-color">Education For Everyone</h5>
        <h2 style={{ fontSize: "3rem" }}>Learn About Our Work Culture At Devschool</h2>
        <p className="lead">
          As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments in
          both soul and mind for kids. We go with kids to play, learn, and grow better.
        </p>
      </div>
      <h2 className="pb-4">Services</h2>
      <div className="row container mx-auto">
        {homeService.map((serviceHome) => (
          <HomeClass key={serviceHome.id} class={serviceHome}></HomeClass>
        ))}
      </div>
      <NavLink className="text-end" to="/services">
        <button className="btn btn-warning py-2 px-4 fs-4">
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>{" "}
      </NavLink>
    </div>
  );
};

export default HomeService;
