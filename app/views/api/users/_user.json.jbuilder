json.extract! user, :id, :email, :fname, :lname, :birthday, :birthmonth,
:birthyear, :gender

json.post_ids do
  json.array! user.authored_post_ids
end

json.comment_ids do
  json.array! user.comment_ids
end

json.friend_ids do
  json.array! user.friends
end

json.sent do
  json.array! user.sent_pending
end

json.received do
  json.array! user.received_waiting
end

if user.profile_pic.attached? 
  json.profile_pic_url url_for(user.profile_pic)
end
