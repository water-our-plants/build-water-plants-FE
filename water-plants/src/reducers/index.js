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
    default:
      return state;
  }
};

export default rootReducer;
