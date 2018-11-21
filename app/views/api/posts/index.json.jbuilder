json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! '/api/posts/post', post: post
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
