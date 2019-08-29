import * as actionTypes from "./types";

import firebase from "../firebase";

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      user: user
    }
  };
};

export const userSignOut = () => {
  return {
    type: actionTypes.USER_SIGN_OUT
  };
};

export const SignOut = () => {
  firebase.auth().signOut();
  return {
    type: actionTypes.USER_LOADING
  };
};
