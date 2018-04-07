import merge from 'lodash/merge';
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  // Ensure state is not mutated:
  Object.freeze(state);

  // Switch statement for receiving the action types (we'll only receive one action type here)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    // Clear the errors
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};


export default sessionErrorsReducer;
