import {
  RECEIVE_COMMENT_ERRORS,
  RECEIVE_COMMENT,
  CLEAR_ERRORS
} from '../actions/comment_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
    case CLEAR_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return [];
    default:
      return state;
  }
};
