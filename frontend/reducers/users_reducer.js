import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  EDIT_CURRENT_USER,
  RECEIVE_USER,
  ACKNOWLEDGE_FRIEND_REQUEST,
  ACCEPT_FRIEND_REQUEST,
  REMOVE_FRIEND
 } from '../actions/user_actions';
import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case EDIT_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case ACKNOWLEDGE_FRIEND_REQUEST:
      debugger
      return merge({}, state, { pending: [action.request.user2_id] });
    case ACCEPT_FRIEND_REQUEST:
      debugger
      return merge({}, state, { friend_ids: [action.friendship.user1_id] })
    case REMOVE_FRIEND:
    //CAUTION: Change this to Object of friendships and update this!!!!!
      const newState = state.friend_ids.slice();
      delete newState(friendshipId)
      return newState
    default:
      return state;
  }
};

export default usersReducer;
