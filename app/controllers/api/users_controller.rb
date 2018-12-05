class Api::UsersController < ApplicationController
  before_action :ensure_logged_in

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else

      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :email, :fname, :lname, :birthday,
      :birthmonth, :birthyear, :gender, :description)
  end

end
