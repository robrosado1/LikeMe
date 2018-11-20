import * as APIUtil from '../util/user_api_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';

export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

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
