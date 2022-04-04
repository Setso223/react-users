import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";

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

  AddNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    return (
      <div>
      <Container style={{marginTop : "1rem"}}>
        <Row>
          <Col md='4'>
            <AddUserForm AddUser={this.AddNewUser} />
          </Col>
          <Col><Users userData = {this.state.users} /></Col>
        </Row>
      </Container>
    </div>
    )
  }
  
}

export default App;
