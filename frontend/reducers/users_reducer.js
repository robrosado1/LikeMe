import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { EDIT_CURRENT_USER } from '../actions/user_actions';
import { RECEIVE_POST } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case EDIT_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
