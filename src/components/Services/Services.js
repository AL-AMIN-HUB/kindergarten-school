import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./allServices.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="row container mx-auto my-5">
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
        {services.map((service) => (
          <Service key={service.className} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
