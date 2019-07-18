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

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Water My Plants</h1>
        <h2>{this.props.user.message ? this.props.user.message : ""}</h2>
        <div className="nav-bar">
          <ul>
            {!this.props.userId && <NavLink to="/login">Login</NavLink>}
          </ul>
          <ul>
            {!this.props.userId &&<NavLink to='/register'>Register</NavLink> 
            }
          </ul>
          <ul>
            {this.props.userId && <NavLink to="/plants">Plants</NavLink>}
          </ul>
          <ul>
            {this.props.userId && <NavLink to="/profile">Edit Profile</NavLink>}
          </ul>
        </div>
        <div clasName="body" />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
         <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={EditUser} />
        <PrivateRoute path="/plants" component={plantsPlaceholder} />
      </div>
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
