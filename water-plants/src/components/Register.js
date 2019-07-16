import React from "react";
import axios from "axios";
import thunk from "redux-thunk";
import { connect } from "react-redux";

import { registerUser } from "../actions";

class Register extends React.Component {
  state = {
    registration: { 
      username: "", 
      password: "", 
      phoneNumber: "" 
    }
  };

 handleChange = e => {
    this.setState({
      registration: {
      ...this.state.registration,
      [e.target.name]: e.target.value
      }
    });
  };

  handleRegistration = e => {
    e.preventDefault();
    console.log("Registration button clicked");
    this.props
      .registerUser(this.state.registration)
      .then(() => this.props.history.push("/"));
  };

  createUser = e => {
    e.preventDefault();
    registerUser(this.state.registration);
    console.log("registered");
  };

 
  render() {
    return (
      <>
        <form>
          <input
            name="username"
            placeholder="Username..."
            type="text"
            value={this.state.registration.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            placeholder="Password..."
            type="password"
            value={this.state.registration.password}
            onChange={this.handleChange}
          />
          <input
            name="phoneNumber"
            placeholder="Phone number..."
            type="text"
            value={this.state.registration.phoneNumber}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.handleRegistration}
          >
            Register
          </button>
        </form>
      </>
    );
  }
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
