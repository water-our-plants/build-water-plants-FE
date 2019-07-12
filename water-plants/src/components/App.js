import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './Login';
import plantsPlaceholder from './plantsPlaceholder';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Water My Plants</h1>
        <div className='nav-bar'>
          <ul>
            <NavLink to='/login'>Login</NavLink>
          </ul>
          <ul>
            <NavLink to='/register'>Register</NavLink>
          </ul>
          <ul>
            <NavLink to='/plants'>Plants</NavLink>
          </ul>
        </div>
        <div clasName='body' />
        <Route path='/login' component={Login} />
        <Route path='/plants' component={plantsPlaceholder} />
      </div>
    );
  }
}

const mapStateToProps = ({ plants }) => ({
  plants
});

export default connect(
  mapStateToProps,
  {}
)(App);
