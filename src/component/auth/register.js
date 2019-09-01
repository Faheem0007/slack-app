import React from "react";
import md5 from "md5";
import {
  Grid,
  Message,
  Header,
  Button,
  Icon,
  Segment,
  Form
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import firebase from "./../../firebase";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: [],
      loading: false,
      refUser: firebase.database().ref("user")
    };
    this.isFormEmpty = this.isFormEmpty.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    this.SubmitHandle = this.SubmitHandle.bind(this);
    this.displyError = this.displyError.bind(this);
  }

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "All Fields Fills " };
      this.setState({
        errors: errors.concat(error)
      });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password InValid" };
      this.setState({
        errors: errors.concat(error)
      });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, password, confirmPassword, username }) => {
    return (
      !email.length ||
      !password.length ||
      !confirmPassword.length ||
      !username.length
    );
  };

  isPasswordValid = ({ password, confirmPassword }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  changeHandle = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  SubmitHandle = e => {
    if (this.isFormValid()) {
      this.setState({
        errors: [],
        loading: true
      });
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createUser => {
          createUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createUser.user.email
              )}?d=identicon`
            })
            .then(() => {
              this.saveUser(createUser)
                .then(() => {
                  this.setState({
                    loading: false
                  });
                })
                .catch(e => {
                  console.log(e);
                });
            });
        })
        .catch(e => {
          this.setState({
            loading: false,
            errors: this.state.errors.concat({ message: e.message })
          });
        });
    }
  };

  saveUser = createUser => {
    return this.state.refUser.child(createUser.user.uid).set({
      name: createUser.user.displayName,
      avatar: createUser.user.photoURL
    });
  };

  displyError = errors =>
    errors.map((msg, i) => {
      return <p key={i}>{msg.message}</p>;
    });

  displyErrorHandleInputs = (errors, input) => {
    return errors.some(error => error.message.toLowerCase().includes(input))
      ? "error"
      : "";
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      username,
      errors,
      loading
    } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange">
            <Icon name="puzzle piece" color="orange" />
            Register for EwigChat
          </Header>
          <Form onSubmit={this.SubmitHandle} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="User name ..."
                onChange={this.changeHandle}
                className={this.displyErrorHandleInputs(errors, "username")}
                value={username}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                onChange={this.changeHandle}
                iconPosition="left"
                value={email}
                placeholder="Email ..."
                className={this.displyErrorHandleInputs(errors, "email")}
                type="email"
              />
              <Form.Input
                name="password"
                type="password"
                value={password}
                icon="lock"
                iconPosition="left"
                onChange={this.changeHandle}
                placeholder="Password"
                className={this.displyErrorHandleInputs(errors, "password")}
              />
              <Form.Input
                type="password"
                icon="repeat"
                onChange={this.changeHandle}
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm Password..."
                iconPosition="left"
                className={this.displyErrorHandleInputs(errors, "password")}
              />

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="orange"
                fluid
                size="large"
              >
                {" "}
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displyError(errors)}
            </Message>
          )}
          <Message>
            Already a user? <Link to="/login"> Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default React.memo(Register);
