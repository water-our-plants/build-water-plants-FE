import React from "react";
import axios from "axios";
import thunk from "redux-thunk";
import { connect } from "react-redux";

import { editUser } from "../actions";

class EditUser extends React.Component {
  state = { user: this.props.user };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleUserEdit = e => {
    e.preventDefault();
    console.log("Update user button clicked");
    this.props.editUser(this.state.user);
    /*.then(() => this.props.history.push("/"));*/
  };

  render() {
    return (
      <>
        <form>
          <input
            name="username"
            placeholder={this.props.user.username}
            type="text"
            value={this.state.user.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            placeholder="Password..."
            type="password"
            value={this.state.user.password}
            onChange={this.handleChange}
          />
          <input
            name="phoneNumber"
            placeholder={this.props.user.phoneNumber}
            type="text"
            value={this.state.user.phoneNumber}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleUserEdit}>
            Update Info
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps,
  { editUser }
)(EditUser);
