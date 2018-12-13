class Api::PostsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @post = Post.new(post_params)

    if params[:post][:photo]
      @post.photo.attach(params[:post][:photo])
    end

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.with_attached_photo.find(params[:id])
    render :show
  end

  def index
    @posts = Post.with_attached_photo.all
    @users = User.all
    @comments = Comment.all
    render :index
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:body, :author_id, :receiver_id)
  end
end
