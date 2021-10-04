import { faArrowRight, faCalculator, faClone, faHome, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const EventCard = () => {
  return (
    <div>
      <Row xs={1} sm={1} md={4} className="g-4 mt-3">
        <Col>
          <Card className="border-0 shadow p-2 card-style">
            <Card.Body>
              <Card.Title>
                {" "}
                <FontAwesomeIcon className="custom-bg-color text-white p-3 rounded-circle" style={{ fontSize: "4rem" }} icon={faHome} />{" "}
              </Card.Title>
              <Card.Title>Museum Visit</Card.Title>
              <Card.Text>Offering weekly activities as visit Museum in the City to broaden the little world of your kids.</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <NavLink to="/home">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow p-2 card-style">
            <Card.Body>
              <Card.Title>
                {" "}
                <FontAwesomeIcon className="bg-success text-white p-3 rounded-circle" style={{ fontSize: "4rem" }} icon={faCalculator} />{" "}
              </Card.Title>
              <Card.Title>Math Club</Card.Title>
              <Card.Text>Offering weekly activities as visit Museum in the City to broaden the little world of your kids.</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <NavLink to="/home">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow p-2 card-style">
            <Card.Body>
              <Card.Title>
                {" "}
                <FontAwesomeIcon className="bg-danger text-white p-3 rounded-circle" style={{ fontSize: "4rem" }} icon={faSchool} />{" "}
              </Card.Title>
              <Card.Title>Summer Camp</Card.Title>
              <Card.Text>Offering weekly activities as visit Museum in the City to broaden the little world of your kids.</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <NavLink to="/home">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow p-2 card-style">
            <Card.Body>
              <Card.Title>
                {" "}
                <FontAwesomeIcon className="bg-secondary text-white p-3 rounded-circle" style={{ fontSize: "4rem" }} icon={faClone} />{" "}
              </Card.Title>
              <Card.Title>Clean & clear</Card.Title>
              <Card.Text>Offering weekly activities as visit Museum in the City to broaden the little world of your kids.</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <NavLink to="/home">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventCard;
