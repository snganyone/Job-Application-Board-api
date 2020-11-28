class JobsController < ApplicationController
    def index
        @jobs = Job.all
        render json: @jobs, except: [:created_at, :updated_at]
    end

    def create
        @job = Job.new()
    end

    private

    def job_params
		params.require(:job).permit(:title, :employer, :location, :description, :release_date)
    end
end
