import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import styled from 'styled-components';

const LoginDiv = styled.div`
border: 1px solid black;
border-radius: 5px;
margin: 20px 200px;
padding-bottom: 21px;
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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
    console.log('logging in');
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/plants'));
  };

  render() {
    return (
      <LoginDiv>
        <h1>Login</h1>
        <h3>Please use this login info</h3>
        <p>username: krgamel</p>
        <p>password: admin1234</p>
        <form onSubmit={this.handleLogin}>
          <input
            name='username'
            placeholder='Username...'
            type='text'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            name='password'
            placeholder='Password...'
            type='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.handleLogin}>Sign In!</button>
        </form>
      </LoginDiv>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
