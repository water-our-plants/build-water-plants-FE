import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import plantsPlaceholder from './plantsPlaceholder';
import PrivateRoute from './PrivateRoute';
import Welcome from './Welcome';
import styled from 'styled-components';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Water My Plants</h1>
        <NavBar>
          <ul>
            <NavLink to="/login">Login</NavLink>
          </ul>
          <ul>
            <NavLink to="/register">Register</NavLink>
          </ul>
          <ul>
            <NavLink to="/plants">Plants</NavLink>
          </ul>
        </NavBar>
        <div className="body" />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/plants" component={plantsPlaceholder} />
      </div>
    );
  }
}

const mapStateToProps = ({ plants, username }) => ({
  plants,
  username
});

export default connect(
  mapStateToProps,
  {}
)(App);
