import axios from "axios";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const registerUser = ({ username, password, phoneNumber }) => {
  return dispatch => {
    dispatch(registerUserStart());

    axios
      .post(`https://be-water-my-plants.herokuapp.com/api/register`, {
        username,
        password,
        phoneNumber
      })
      .then(res => {
        dispatch(registerUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(registerUserFail(err.message));
      });
  };
};

const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  payload: {
    ...user
  }
});

const registerUserStart = () => ({
  type: REGISTER_USER_START
});

const registerUserFail = error => ({
  type: REGISTER_USER_FAIL,
  payload: {
    error
  }
});
