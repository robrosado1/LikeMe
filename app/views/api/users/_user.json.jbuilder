json.extract! user, :id, :email, :fname, :lname, :birthday, :birthmonth,
:birthyear, :gender

json.post_ids do
  json.array! user.authored_post_ids
end
