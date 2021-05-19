class DashboardController < ApplicationController
  def index
    @user = current_user
    @rooms = @user.rooms
    @channels = @rooms.first.channels
    @messages = @channels.first.messages
  end
end
