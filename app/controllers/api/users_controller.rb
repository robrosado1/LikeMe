class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    @user.profile_pic.attach(
      io: File.open('/Users/rob/Desktop/LikeMe/app/assets/images/default_profile_pic.jpeg'),
      filename: 'default_profile_pic.jpeg')
    end

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

    if params[:user][:profile_pic]
      @user.profile_pic.attach(params[:user][:profile_pic])
    else
      @user.profile_pic.attach(
        io: File.open('/Users/rob/Desktop/LikeMe/app/assets/images/default_profile_pic.jpeg'),
        filename: 'default_profile_pic.jpeg')
    end

    if @user.update(user_params)
      render :show
    else

      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :email, :fname, :lname, :birthday,
      :birthmonth, :birthyear, :gender, :description, :profile_pic)
  end

end
