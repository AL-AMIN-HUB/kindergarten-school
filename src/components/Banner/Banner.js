import React from "react";
import BannerImg from "../../slider.129d1012.svg";

const Banner = () => {
  return (
    <div className="banner-bg text-white d-flex justify-content-around align-items-center  overflow-hidden py-5">
      <div style={{ marginLeft: "300px" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>We Are Child Care</h2>
        <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>Professional</h1>
        <p className="lead">
          <small>
            You must know that there is nothing higher and stronger and more wholesome and good for life. In the feature than some good memory,
            specially a memory of childhood.
          </small>
        </p>
        <button className="btn btn-outline-light py-2 px-4 me-4 mt-2 fs-4">Apply Now</button>
        <button className="btn btn-outline-light py-2 px-4  mt-2 fs-4">Learn More</button>
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
