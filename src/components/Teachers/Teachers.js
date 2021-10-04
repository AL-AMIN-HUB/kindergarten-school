import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  // state declare
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./teacherDb.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div className="row container mx-auto my-5">
      <div className="col-md-12 text-center">
        <h5 className="custom-text-color">Together We Can Create</h5>
        <h2 style={{ fontSize: "3rem" }}>Who Stand By Your Kids Always</h2>
        <p className="lead">
          While the unit economics were a driving factor, the company says its acquisition of lidar company Blackmore and the integration of that tech
          in its self-driving stack has made the shift to trucks possible. Aurora has said its FirstLight.
        </p>
      </div>
      <div className="container mx-auto">
        <Row xs={1} sm={2} md={4} className="g-4">
          {teachers.map((teacher) => (
            <Teacher key={teacher.name} teacher={teacher}></Teacher>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Teachers;
