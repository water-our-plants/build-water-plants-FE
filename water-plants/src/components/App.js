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
import profileIcon from "../resources/plant1.svg";
import bgImage from "../resources/bg1.jpg";

const NavBar = styled.div`
  /*border-bottom: 2px solid darkgrey;*/

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 20px;
  width: 585px;

  ul {
    padding: 0px 0px;
    margin: 0px 10px;
  }
  ul:first-of-type {
    margin-left: 0px;
  }
`;

const AppWrapper = styled.div`
  align-items: center;
  background-color: #ebebe9;
  background-image: url(${bgImage});
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-appearance: none;
  .header {
    background-color: white;
    border-top: 4px solid rgb(98, 119, 68);

    margin-top: 5px;
    padding: 0px 12px;
    width: 616px;
    a {
      color: black;
      text-decoration: none;
    }
    h1 {
      align-self: flex-start;
    }
    .header-top {
      align-content: flex-start;
      flex-wrap: wrap;
      height: 45px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .profile-icon {
        width: 24px;
        height: 24px;
      }
      .profile-name {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 18px;
        }
        .header-top-name {
          align-self: flex-end;
        }
      }
    }
  }
  .body {
    background-color: white;
    margin-bottom: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    border-bottom: 2px solid rgb(98, 119, 68);
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="app">
        <div className="header">
          <div className="header-top">
            <NavLink className="title" to="/">
              Water My Plants
            </NavLink>
            <div className="profile-name">
              <img className="profile-icon" src={profileIcon} />
              <div className="header-top-name">{this.props.user.username}</div>
            </div>
          </div>
          {/*<h2>{this.props.user.message ? this.props.user.message : ""}</h2>*/}
          <NavBar className="navBar">
            {!this.props.userId && (
              <ul>
                {" "}
                <StyledNavLink to="/login">Login</StyledNavLink>
              </ul>
            )}
            {!this.props.userId && (
              <ul>
                <StyledNavLink to="/register">Register</StyledNavLink>
              </ul>
            )}
            {this.props.userId && (
              <ul>
                {" "}
                <StyledNavLink to="/plants">Plants</StyledNavLink>
              </ul>
            )}
            {this.props.userId && (
              <ul>
                <StyledNavLink to="/profile">Edit Profile</StyledNavLink>
              </ul>
            )}
          </NavBar>
        </div>
        <div className="body">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
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
