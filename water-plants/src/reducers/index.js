import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from "../actions";

const initialState = {
  plants: [],
  loggingIn: false,
  fetchingPlants: false,
  addingPlant: false,
  updatingUser: false,
  deletingPlant: false,
  error: null,
  user: {},
  isLoading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true,
        error: ""
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
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    }
    case REGISTER_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case REGISTER_USER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
