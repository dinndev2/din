class Api::V1::SettingListsController < ApplicationController
  def index
    @setting_lists = SettingList.all
    render json: @setting_lists, status: :ok
  end
end