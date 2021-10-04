import { faAddressBook, faClock, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto row my-5 d-flex justify-content-between">
      <div className="shadow p-5 col-12 col-md-6">
        <h5 className="custom-text-color">Contact Us</h5>
        <h3 style={{ fontSize: "3rem" }}>Keep in Touch</h3>
        <input type="text" placeholder="Your Name" className="form-control" />
        <br />
        <input type="email" placeholder="Your Email" className="form-control" />
        <br />
        <textarea name="" id="" rows="4" className="form-control"></textarea> <br />
        <NavLink to="/message">
          <button className="btn btn-success py-2 px-5 fs-4">Send Message</button>
        </NavLink>
      </div> 
      <div className="shadow p-5 col-12 col-md-5">
        <h3 style={{ fontSize: "3rem" }}>Address</h3>
        <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone} /> <span className="custom-text-color fs-5">Phone:</span> +888 01779 26 **
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faMailBulk} /> <span className="custom-text-color fs-5">Mail:</span> alaminsbl502@gmail.com
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faAddressBook} /> <span className="custom-text-color fs-5">Address:</span> 4297 Libby Street, Beverly Hills,
          California
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faClock} /> <span className="custom-text-color fs-5">Working day:</span> 9am - 5pm EST, Monday - Friday
        </p>
      </div>
    </div>
  );
};

export default Contact;
