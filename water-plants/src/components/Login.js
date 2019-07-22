import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import styled from "styled-components";

const LoginContainer = styled.div`
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  display: flex;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  justify-content: center;
  line-height: 18.4px;
  margin-bottom: 20px;
  min-height: 245px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  user-select: none;
  width: 640px;
  .login-header {
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    box-sizing: border-box;
    color: rgb(54, 54, 54);
    display: block;
    flex-basis: 0%;
    flex-grow: 0;
    flex-shrink: 1;
    font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    height: 42px;
    line-height: 18.4px;
    margin-bottom: 12px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 13px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    text-align: left;
    text-size-adjust: 100%;
    user-select: none;
    width: 302px;
  }
`;

const LoginForm = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(228, 228, 228);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 64, 128, 0.086) 0px 3px 30px 0px;
  box-sizing: border-box;
  color: rgb(54, 54, 54);
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  min-height: 233px;
  justify-content: center;
  line-height: 18.4px;
  text-size-adjust: 100%;
  user-select: none;
  max-width: 302px;
  form {
    align-items: flex-start;
    align-self: center;
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    box-shadow: rgba(0, 64, 128, 0.086) 0px 3px 10px 0px;
    box-sizing: border-box;
    color: rgb(54, 54, 54);
    cursor: default;
    display: flex;

    flex-basis: 0%;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 1;

    font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    /*height: 42px;*/
    justify-self: center;
    line-height: 18.4px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    text-size-adjust: 100%;
    user-select: none;
    width: 278px;
    button {
      align-self: center;
      height: 42px;
      margin-top: 10px;
      width: 208px;
    }
    .input {
      align-self: center;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin-bottom: 5px;
      text-align: left;
      width: 208px;
    }
  }
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log("logging in");
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/plants"));
  };

  render() {
    return (
      <LoginContainer>
        <LoginForm>
          <div className="login-header">Login</div>

          <form onSubmit={this.handleLogin}>
            <input
              className="input"
              name="username"
              placeholder="Username..."
              type="text"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              className="input"
              name="password"
              placeholder="Password..."
              type="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleLogin}>Sign In!</button>
          </form>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
