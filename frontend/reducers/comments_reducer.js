import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import {RECEIVE_ALL_POSTS} from '../actions/post_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
    case RECEIVE_ALL_POSTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
