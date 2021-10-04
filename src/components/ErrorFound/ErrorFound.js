import React from "react";
import { NavLink } from "react-router-dom";

const ErrorFound = () => {
  return (
    <div>
      <img className="d-block mx-auto mt-5 " src="https://asia-exstatic.vivo.com/static/img/error/404-PC_31daffa.png" alt="" />
      <div className="text-end me-5 mt-3">
        <NavLink to="/home">
          <button className="btn btn-dark py-2 fs-3 px-3 mb-5">Go Back Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorFound;
