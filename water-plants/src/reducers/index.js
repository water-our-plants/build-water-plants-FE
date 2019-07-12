import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  plants: [],
  loggingIn: false,
  fetchingPlants: false,
  addingPlant: false,
  updatingUser: false,
  deletingPlant: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
