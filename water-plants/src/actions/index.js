import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const registerUser = registration => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  return (
    
    axios
      .post(`https://be-water-my-plants.herokuapp.com/api/register`,
        registration)
      .then(res => {
        console.log(res);
        dispatch(
          { type: REGISTER_USER_SUCCESS,
           payload: res.data
          }
        );
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_USER_FAIL,
                  payload: err.response.data.message
                 });
      })
  )
};



export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://be-water-my-plants.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};
