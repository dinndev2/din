class Api::V1::JobsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @jobs = Job.all
    render json: @jobs, status: :ok
  end

  def create
    job = Job.create(job_params)
    job.save

    if job.save
      render json: job.id, status: :ok
    else
      render status: :internal_server_error, message: "An error occurred while creating the job."
    end
  end


  def destroy
    @job = Job.find(params[:id])
    if @job.destroy
      render json: { data: @job }, status: :ok
    else
      render json: { errors: @job.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def job_params
    params.require(:job).permit(:description, :name, :start, :end, :code_link, :link, :identifier)
  end
end
