json.set! 'post_ids' do
  @posts.each do |post|
    json.extract! post, :id
  end
end
