json.extract! user, :id, :email, :fname, :lname, :birthday, :birthmonth,
:birthyear, :gender

json.set! 'post_ids' do
  json.array! user.authored_posts do |post|
    post.id
  end
end
