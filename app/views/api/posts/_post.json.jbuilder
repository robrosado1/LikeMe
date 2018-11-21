json.extract! post, :id, :author_id, :receiver_id, :body
json.comment_ids do
  json.array! post.comment_ids
end
