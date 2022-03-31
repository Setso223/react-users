import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Users from "./Components/Users";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "Setso Amezah",
          email: "setso@mez.com",
          ucode: 223
        },
        {
          name: "Xoese Amezah",
          email: "xoese@mez.com",
          ucode: 323
        },
        {
          name: "Klenam Amezah",
          email: "klenam@mez.com",
          ucode: 456
        },
      ]
    }
  }
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col>Form</Col>
          <Col><Users userData = {this.state.users} /></Col>
        </Row>
      </Container>
    </div>
    )
  }
  
}

export default App;
