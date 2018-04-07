// This reducer's job is to keep track of our current user
// It should listen for 1 action type and respond to it by setting currentUser to the action's user

import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
