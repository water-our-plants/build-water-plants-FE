import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  ADD_PLANT_START,
  ADD_PLANT_SUCCESS,
  ADD_PLANT_FAIL,
  GET_PLANTS_START,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_FAIL
} from "../actions";

const initialState = {
  userId: "",
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
        loggingIn: false,
        userId: action.payload.id,
        user: action.payload
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
    case GET_PLANTS_START: {
      return {
        ...state,
        fetchingPlants: true
      };
    }
    case GET_PLANTS_SUCCESS: {
      return {
        ...state,
        fetchingPlants: false,
        plants: action.payload
      };
    }
    case GET_PLANTS_FAIL: {
      return {
        ...state,
        fetchingPlants: false,
        error: action.payload
      };
    }
    case ADD_PLANT_START: {
      return {
        ...state,
        addingPlant: true,
        error: ""
      };
    }
    case ADD_PLANT_SUCCESS: {
      return {
        ...state,
        addingPlant: false,
        plants: action.payload
      };
    }
    case ADD_PLANT_FAIL: {
      return {
        ...state,
        addingPlant: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
