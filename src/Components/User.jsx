import React from "react";
import { Card, Col } from "react-bootstrap";

const User = (props) => {
  return (
    <Col md="3">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              React User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Ucode: {props.userInfo.ucode}</p>
            </Card.Text>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default User;
