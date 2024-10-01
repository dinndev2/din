class Api::V1::NotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @notes = Note.all

    render json: @notes, status: :ok
  end

  def create
    note = Note.create(notes_params)
    note.save

    if note.save
      render json: @note, status: :ok
    else
      render status: :internal_server_error, message: "An error occurred while creating the user."
    end
  end

  def show
    @note = Note.find(params[:id])

    render json: @note, status: :ok
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      render json: { data: @note }, status: :ok
    else
      render json: { errors: @note.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def notes_params
    params.require(:note).permit(:description, :title)
  end
end
