import React from "react";
import axios from "axios";
import thunk from "redux-thunk";
import { connect } from "react-redux";

import { registerUser } from "../actions";

const Register = props => {
  const createUser = e => {
    props.registerUser({username: "testUser", password: "password1", phoneNumber: 1234567890});
  }
  return (
    <>
      <button type="button" onClick={createUser}>Click to register</button>
    </>
  )
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
