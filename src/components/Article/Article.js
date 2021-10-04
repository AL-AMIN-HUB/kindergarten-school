import React from "react";
import { Card, Col } from "react-bootstrap";

const Article = (props) => {
  const { subject, time, price, images, address } = props.article;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title className="fs-6"> {address} </Card.Title>
          <Card.Text className="fs-5">{subject}</Card.Text>
          <Card.Text>{time}</Card.Text>
          <Card.Text className="custom-text-color fw-bold fs-4">$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
