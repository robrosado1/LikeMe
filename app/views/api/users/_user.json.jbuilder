json.extract! user, :id, :email, :fname, :lname, :birthday, :birthmonth,
:birthyear, :gender

json.post_ids do
  json.array! user.authored_post_ids
end

json.comment_ids do
  json.array! user.comment_ids
end

json.friend_ids do
  json.array! user.friends do |friendship|
    friendship.user2_id
  end
end
