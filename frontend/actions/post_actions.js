import * as PostApiUtil from '../util/post_api_util';
import * as UserApiUtil from '../actions/user_actions';
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(payload => dispatch(receiveAllPosts(payload)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err.responseJSON)))
);

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
);

const receiveAllPosts = ({ posts, users }) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  users
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

const receivePostErrors = errors => {
  return ({
    type: RECEIVE_POST_ERRORS,
    errors
  });
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});
