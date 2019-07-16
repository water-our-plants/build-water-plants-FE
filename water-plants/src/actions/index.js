import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const ADD_PLANT_START = 'ADD_PLANT_START';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAIL = 'ADD_PLANT_FAIL';

export const GET_PLANTS_START = 'GET_PLANTS_START';
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';
export const GET_PLANTS_FAIL = 'GET_PLANTS_FAIL';

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
    .post('https://be-water-my-plants.herokuapp.com/api/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

export const addPlant = (e, userId, newPlant) => dispatch => {
  e.preventDefault();
  dispatch({ type: ADD_PLANT_START });
  return axiosWithAuth()
    .post(
      `https://be-water-my-plants.herokuapp.com/api/addPlants/${userId}`,
      newPlant
    )
    .then(res => {
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PLANT_FAIL, payload: err.response });
    });
};

export const getPlants = username => dispatch => {
  dispatch({ type: GET_PLANTS_START });
  axiosWithAuth()
    .get(`https://be-water-my-plants.herokuapp.com/api/getPlants/${username}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_PLANTS_FAIL, payload: err.response });
    });
};
