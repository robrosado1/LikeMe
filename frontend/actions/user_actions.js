import * as APIUtil from '../util/user_api_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';

export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';

const updateCurrentUser = user => ({
  type: EDIT_CURRENT_USER,
  user
});

export const edit = user => dispatch => {
  APIUtil.edit(user).then( edittedUser => {
    return dispatch(updateCurrentUser(edittedUser));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
