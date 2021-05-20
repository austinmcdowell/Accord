class DashboardController < ApplicationController
  before_action :set_user
  def index
    @rooms = @user.rooms
    @channels = @rooms.first.channels
    @messages = @channels.first.messages.includes(:user)
  end

  def set_user 
    if user_signed_in?
      @user = current_user
    else
      redirect_to new_user_session_path
    end
  end
end
