import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://be-water-my-plants.herokuapp.com/api/login', creds)
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};
