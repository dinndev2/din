class Api::V1::NotesController < ApplicationController
  def index
    @notes = Note.all

    respond_to do |format|
      format.json { render :json => @notes, head: :ok}
    end
  end

  def show
    @note = Note.find(params[:id])

    respond_to do |format|
      format.json { render :json => @note, head: :ok}
    end
  end
end
