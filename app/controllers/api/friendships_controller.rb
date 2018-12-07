class Api::FriendshipsController < ApplicationController

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages
    end
  end

  def update

    @friendship = Friendship.find_by(
      user1_id: params[:friendship][:user1_id],
      user2_id: params[:friendship][:user2_id]
    )

    if @friendship.update(friendship_params)
      render :show
    else
      render json: @friendship.errors.full_messages
    end
  end

  def destroy
    friendship =Friendship.find(params[:id])
    if friendship.destroy
      render :show
    else
      render json: friendship.errors.full_messages
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user1_id, :user2_id, :pending)
  end
end
