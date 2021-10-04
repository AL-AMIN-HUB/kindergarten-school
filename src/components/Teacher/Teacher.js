import React from "react";
import "./Teacher.css";

const Teacher = (props) => {
  const { name, role, teacherThumb } = props.teacher;
  return (
    <div className="col-12 col-md-3">
      <div className="card m-3 teacher-div">
        <img className="img-fluid teacher-img" src={teacherThumb} alt="" />
        <div className=" bg-white details w-75 text-center p-2 rounded-3 shadow">
          <h5> {name} </h5>
          <p>
            <small className="role"> {role} </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
