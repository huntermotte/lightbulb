import * as actions from '../actions/index';

const initialState = {
  user: {},
  venueData: {}
}

const usersReducer = (state=initialState, action) => {
  if (action.type === actions.RECEIVE_CREDENTIALS) {
    return {
      ...state,
      user: action.user
    }
  }
  else if (action.type === actions.LOGOUT_CURRENT_USER) {
    return {
      ...state,
      user: null
    }
  }
  else if (action.type === actions.RETRIEVE_VENUE_DATA) {
    return {
      ...state,
      venueData: action.venueData
    }
  }
  else {
    return state
  }
};

export default usersReducer;
