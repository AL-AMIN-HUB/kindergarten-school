import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Teacher.css";

const Teacher = (props) => {
  // destructuring
  const { name, role, teacherThumb } = props.teacher;
  return (
    <Col>
      <Card className="m-3 teacher-div">
        <Card.Img variant="top" className="img-fluid teacher-img" src={teacherThumb} />
        <Card.Body className=" bg-white details w-75 text-center p-2 rounded-3 shadow">
          <Card.Title>
            <h5> {name} </h5>
          </Card.Title>
          <Card.Text>
            <p>
              <small className="role"> {role} </small>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Teacher;
