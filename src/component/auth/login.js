import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Segment,
  Grid,
  Form,
  Header,
  Icon,
  Message
} from "semantic-ui-react";

import firebase from "./../../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      loading: false
    };
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitHandle = e => {
    e.preventDefault();
    if (this.isFromValid(this.state)) {
      this.setState({
        error: [],
        loading: true
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signIn => {
          this.setState({
            errors: [],
            loading: false
          });
          console.log(signIn);
        })
        .catch(e => {
          this.setState({
            errors: this.state.errors.concat(e),
            loading: false
          });
        });
    }
  };

  isDisplayError = errors => {
    return errors.map((msg, i) => <p key={i}>{msg.message}</p>);
  };

  displyErrorHandleInputs = (errors, input) => {
    return errors.some(error => error.message.toLowerCase().includes(input));
  };

  isFromValid = ({ email, password }) => {
    if (!(email.length && password.length) || email === "" || password === "") {
      if (this.state.errors.length === 0) {
        let error = { message: "fill all field" };
        this.setState({
          errors: this.state.errors.concat(error)
        });
        return false;
      }
    } else {
      return true;
    }
  };

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet">
            <Icon name="code branch" color="violet" />
            Login to Ewigchat
          </Header>
          <Form onSubmit={this.SubmitHandle} size="large">
            <Segment stacked>
              <Form.Input
                name="email"
                value={email}
                placeholder="enter your email address..."
                icon="mail"
                type="email"
                onChange={this.changeHandle}
                className={
                  this.displyErrorHandleInputs(errors, "email") ? "error" : ""
                }
                iconPosition="left"
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="enter your Password..."
                icon="lock"
                value={password}
                onChange={this.changeHandle}
                className={
                  this.displyErrorHandleInputs(errors, "password")
                    ? "error"
                    : ""
                }
                iconPosition="left"
              />
              <Button
                size="large"
                disabled={loading}
                className={loading ? "loading" : ""}
                fluid
                color="violet"
              >
                Login
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.isDisplayError(errors)}
            </Message>
          )}
          <Message>
            Don't have an account ? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default React.memo(Login);
