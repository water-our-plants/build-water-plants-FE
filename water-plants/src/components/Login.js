import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

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
      <div className='login-page'>
        <h1>Login</h1>
        <h3>Please use this login info</h3>
        <p>username: kgamel</p>
        <p>password: admin12</p>
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
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
