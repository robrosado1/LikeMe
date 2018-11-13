class Api::UsersController < ApplicationController

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

  end

  def index
    @users = User.all
    render :index
  end

  def edit

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :email)
  end

end
