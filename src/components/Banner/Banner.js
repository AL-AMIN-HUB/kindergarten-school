import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from "../../slider.129d1012.svg";

const Banner = () => {
  return (
    <div
      className="banner-bg text-white d-flex align-items-center  overflow-hidden py-5 shadow px-5"
      style={{ borderRadius: "30px" }}
    >
      <div className="col-12 col-md-6">
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>We Are Child Care</h1>
        <h2 style={{ fontSize: "5rem", fontWeight: "bold" }}>Professional</h2>
        <p className="lead">
          <small>
            You must know that there is nothing higher and stronger and more wholesome and good for life. <br /> In the feature than some good memory,
            specially a memory of childhood.
          </small>
        </p>
        <NavLink to="/services">
          <button className="btn btn-outline-light py-2 px-4 me-4 mt-2 fs-4">Apply Now</button>
        </NavLink>
        <NavLink to="/about">
          <button className="btn btn-outline-light py-2 px-4  mt-2 fs-4">Learn More</button>
        </NavLink>
      </div>
      <div className="col-12 col-md-6">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
