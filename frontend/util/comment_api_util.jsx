
export const fetchComments = () => {
  return $.ajax({
    method: 'get',
    url: `/api/comments/`
  });
};

export const fetchComment = id => {
  return $.ajax({
    method: 'get',
    url: `/api/comments/${id}`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: 'post',
    url: `api/posts/${comment.commentable_id}/comments`,
    data: { comment }
  });
};

export const updateComment = comment => {

  return $.ajax({
    method: 'patch',
    url: `api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = commentId => {

  return $.ajax({
    method: 'delete',
    url: `api/comments/${commentId}`
  });
};
