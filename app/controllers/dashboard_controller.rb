class DashboardController < ApplicationController
  before_action :set_user
  def index
    @rooms = @user.rooms
    @channels = @rooms.first.channels
    @messages = @channels.first.messages.includes(:user)
  end

  def set_user 
    @user = current_user
  end
end
