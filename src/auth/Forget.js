import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback
} from "reactstrap";
import "./Login.css";

import { Link } from "react-router-dom";

export default class Forget extends Component {
  render() {
    return (
      <div>
        <Container className="App">
          <h2>Forget Password</h2>
          <Form className="form" onSubmit={e => this.submitForm(e)}>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                  // value={email}
                  // valid={this.state.validate.emailState === "has-success"}
                  // invalid={this.state.validate.emailState === "has-danger"}
                  // onChange={e => {
                  //   this.validateEmail(e);
                  //   this.handleChange(e);
                  // }}
                />
                <FormFeedback valid>
                  That's a tasty looking email you've got there.
                </FormFeedback>
                <FormFeedback>
                  Uh oh! Looks like there is an issue with your email. Please
                  input a correct email.
                </FormFeedback>
                <FormText>Your username is most likely your email.</FormText>
              </FormGroup>
            </Col>

            <Button>Submit</Button>
          </Form>
          <Link to="/register">Don't Have An Account</Link>
        </Container>{" "}
      </div>
    );
  }
}
