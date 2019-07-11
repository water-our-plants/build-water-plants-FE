import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='app-header'>
          <h1>Water My Plants</h1>
        </div>
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
