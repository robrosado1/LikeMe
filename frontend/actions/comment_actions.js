import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const fetchComments = () => dispatch => (
  CommentApiUtil.fetchComments().then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchComment = id => dispatch => (
  CommentApiUtil.fetchComment(id)
    .then(comment => dispatch(receiveComment(comment))),
      err => dispatch(receiveCommentErrors(err))
);

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveCommentErrors(err.responseJSON)))
);

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveCommentErrors(err.responseJSON)))
);

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
);

const receiveAllComments = comments => {
  return ({
    type: RECEIVE_ALL_COMMENTS,
    comments
  })
};

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveCommentErrors = errors => {
  return ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
  });
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});
