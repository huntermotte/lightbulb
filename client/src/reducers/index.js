import * as actions from '../actions/index';

const initialState = {
  user: {}
}

const usersReducer = (state=initialState, action) => {
  if (action.type === actions.RECEIVE_CREDENTIALS) {
    return {
      ...state,
      user: action.user
    }
  }
  else {
    return state
  }
};

export default usersReducer;
