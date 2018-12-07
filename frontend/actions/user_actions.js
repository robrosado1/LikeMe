import * as APIUtil from '../util/user_api_util';
import * as FriendshipAPIUtil from '../util/friendship_api_util';

export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const ACKNOWLEDGE_FRIEND_REQUEST = 'ACKNOWLEDGE_FRIEND_REQUEST';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const updateCurrentUser = user => ({
  type: EDIT_CURRENT_USER,
  user
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  });
};

export const removeFriend = friendshipId => {
  return ({
    type: REMOVE_FRIEND,
    friendshipId
  });
};

const acknowledgeFriendRequest = request => {
  return ({
    type: ACKNOWLEDGE_FRIEND_REQUEST,
    request
  });
}

const acceptFriendshipRequest = friendship => {

  return ({
    type: ACCEPT_FRIEND_REQUEST,
    friendship
  });
}

export const edit = user => dispatch => {
  APIUtil.edit(user).then( edittedUser => {
    return dispatch(updateCurrentUser(edittedUser));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchUser = id => dispatch => {
  APIUtil.fetchUser(id).then( user => {
    return dispatch(receiveUser(user));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchUsers = () => dispatch => {
  APIUtil.fetchUsers().then( users => {
    return dispatch(receiveUsers(users));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const sendFriendRequest = friendship => dispatch => {
  FriendshipAPIUtil.sendFriendRequest(friendship).then( request => {
    return dispatch(acknowledgeFriendRequest(request));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const acceptFriendRequest = friendship => dispatch => {

  FriendshipAPIUtil.acceptFriendRequest(friendship).then( request => {
    return dispatch(acceptFriendshipRequest(request));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteFriend = friendship => dispatch => {

  FriendshipAPIUtil.deleteFriend(friendship).then( friendshipId => {
    return dispatch(removeFriend(friendshipId));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
