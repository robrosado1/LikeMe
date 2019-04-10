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
      const sender = state[action.request.user1_id];
      const receiver = state[action.request.user2_id];
      return merge({}, state, {
        [action.request.user1_id]: {
          sent: sender.sent.concat(action.request.user2_id)
        },
        [action.request.user2_id]: {
          received: receiver.received.concat(action.request.user1_id)
        }
      });
    case ACCEPT_FRIEND_REQUEST:
      const newReceived = state[action.friendship.user2_id].received;
      const newSent = state[action.friendship.user1_id].sent;
      const senderIndex = newReceived.findIndex(userId => userId === action.friendship.user1_id);
      const receiverIndex = newSent.findIndex(userId => userId === action.friendship.user2_id);
      newReceived.splice(senderIndex, 1);
      newSent.splice(receiverIndex, 1);
      return merge({}, state, {
        [action.friendship.user2_id]: {
          friend_ids: [action.friendship.user1_id],
          received: newReceived
        },
        [action.friendship.user1_id]: {
          friend_ids: [action.friendship.user2_id],
          sent: newSent
        }
      });
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
