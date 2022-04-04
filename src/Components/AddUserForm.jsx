import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Adduserform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        name: "",
        email: "",
        ucode: "",
      },
    };

    this.handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value,
      });
      console.log(this.state);
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.AddUser(this.state);
      this.setState({
        
          name: "",
          email: "",
          ucode: "",
        
      });
    };
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ucode</Form.Label>
            <Form.Control
              type="number"
              placeholder="Code"
              name="ucode"
              value={this.state.ucode}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Adduserform;
