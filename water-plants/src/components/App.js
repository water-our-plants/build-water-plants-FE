import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import EditUser from "./EditUser";
import plantsPlaceholder from "./plantsPlaceholder";
import PrivateRoute from "./PrivateRoute";
import Welcome from "./Welcome";
import styled from "styled-components";

const NavBar = styled.div`
  border-bottom: 2px solid darkgrey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 5%;
  width: 585px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  h1 {
    align-self: flex-start;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="app">
        <h1>Water My Plants</h1>
        <h2>{this.props.user.message ? this.props.user.message : ""}</h2>
        <NavBar className="navBar">
          {!this.props.userId && (
            <ul>
              {" "}
              <NavLink to="/login">Login</NavLink>
            </ul>
          )}
          {!this.props.userId && (
            <ul>
              <NavLink to="/register">Register</NavLink>
            </ul>
          )}
          {this.props.userId && (
            <ul>
              {" "}
              <NavLink to="/plants">Plants</NavLink>
            </ul>
          )}
          {this.props.userId && (
            <ul>
              <NavLink to="/profile">Edit Profile</NavLink>
            </ul>
          )}
        </NavBar>
        <div className="body">
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={EditUser} />
          <PrivateRoute path="/plants" component={plantsPlaceholder} />
        </div>
      </AppWrapper>
    );
  }
}

const mapStateToProps = ({ plants, username, user, userId }) => ({
  plants,
  username,
  user,
  userId
});

export default connect(
  mapStateToProps,
  {}
)(App);
