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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 2px solid darkgrey;
  padding-right: 5%;

  a {
    text-decoration: none;
    color: black;
  }
`;

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="app">
        <h1>Water My Plants</h1>
        <h2>{this.props.user.message ? this.props.user.message : ""}</h2>
        <NavBar>
          <ul>{!this.props.userId && <NavLink to="/login">Login</NavLink>}</ul>
          <ul>
            {!this.props.userId && <NavLink to="/register">Register</NavLink>}
          </ul>
          <ul>{this.props.userId && <NavLink to="/plants">Plants</NavLink>}</ul>
          <ul>
            {this.props.userId && <NavLink to="/profile">Edit Profile</NavLink>}
          </ul>
        </NavBar>
        <div className="body" />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={EditUser} />
        <PrivateRoute path="/plants" component={plantsPlaceholder} />
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
