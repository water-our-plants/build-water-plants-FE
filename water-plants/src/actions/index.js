import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL';

export const ADD_PLANT_START = 'ADD_PLANT_START';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAIL = 'ADD_PLANT_FAIL';

export const GET_PLANTS_START = 'GET_PLANTS_START';
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';
export const GET_PLANTS_FAIL = 'GET_PLANTS_FAIL';

export const DEL_PLANT_START = 'DEL_PLANT_START';
export const DEL_PLANT_SUCCESS = 'DEL_PLANT_SUCCESS';
export const DEL_PLANT_FAIL = 'DEL_PLANT_FAIL';

export const UPD_SCHED_START = 'UPD_SCHED_START';
export const UPD_SCHED_SUCCESS = 'UPD_SCHED_SUCCESS';
export const UPD_SCHED_FAIL = 'UPD_SCHED_FAIL';

export const registerUser = registration => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  return axios
    .post(`https://be-water-my-plants.herokuapp.com/api/register`, registration)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: err.response.data.message
      });
    });
};

export const editUser = user => dispatch => {
  dispatch({ type: EDIT_USER_START });
  return axiosWithAuth()
    .put(`https://be-water-my-plants.herokuapp.com/api/editUser/${user.id}`, {
      username: user.username,
      phoneNumber: user.phoneNumber,
      password: user.password
    })
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_USER_SUCCESS, payload: user });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: EDIT_USER_FAIL,
        payload: err.response.data.message
      });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return axios
    .post('https://be-water-my-plants.herokuapp.com/api/login', creds)
    .then(res => {
      console.log('login returned:', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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

export const getPlants = userId => dispatch => {
  dispatch({ type: GET_PLANTS_START });
  console.log('fetching plants');
  axiosWithAuth()
    .get(`https://be-water-my-plants.herokuapp.com/api/getPlants/${userId}`)
    .then(res => {
      console.log('returned this data', res);
      dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_PLANTS_FAIL, payload: err.response });
    });
};

export const delPlant = (plantId, userId) => dispatch => {
  dispatch({ type: DEL_PLANT_START });
  axiosWithAuth()
    .delete(
      `https://be-water-my-plants.herokuapp.com/api/deletePlant/${plantId}`,
      userId
    )
    .then(res => {
      console.log('delete successful');
      console.log(res);
      dispatch({ type: DEL_PLANT_SUCCESS });
      dispatch({ type: GET_PLANTS_START });
      console.log('fetching plants');
      axiosWithAuth()
        .get(`https://be-water-my-plants.herokuapp.com/api/getPlants/${userId}`)
        .then(res => {
          console.log('returned this data', res);
          dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_PLANTS_FAIL, payload: err.response });
        });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DEL_PLANT_FAIL, payload: err.response });
    });
};

export const updateSchedule = (plantId, userId, updatePlant) => dispatch => {
  dispatch({ type: UPD_SCHED_START });
  axiosWithAuth()
    .put(
      `https://be-water-my-plants.herokuapp.com/api/editPlants/${plantId}`,
      updatePlant
    )
    .then(res => {
      dispatch({ type: UPD_SCHED_SUCCESS });
      dispatch({ type: GET_PLANTS_START });
      console.log('fetching plants');
      axiosWithAuth()
        .get(`https://be-water-my-plants.herokuapp.com/api/getPlants/${userId}`)
        .then(res => {
          console.log('returned this data', res);
          dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_PLANTS_FAIL, payload: err.response });
        });
    })
    .catch(err => {
      dispatch({ type: UPD_SCHED_FAIL, payload: err.response });
    });
};
