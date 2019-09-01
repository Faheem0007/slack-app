import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Register from "./auth/register";
import Login from "./auth/login";
import Home from "./Home";
import firebase from "./../firebase";
import { setUser, userSignOut, SignOut } from "./../actions/index";
import "./App.css";
import Spinner from "./Spinner";

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
        this.props.userSignOut();
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" render={() => <Home {...this.props} />} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state,
    channel: state.channel.currentChannel,
    isLoading: state.userReducer.loading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setUser, userSignOut, SignOut }
  )(App)
);
