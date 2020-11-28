class JobsController < ApplicationController
    def index
        if(params[:query])
            @jobs = Job.search(params[:query])
        else
            @jobs = Job.all
            render json: @jobs, except: [:created_at, :updated_at]
        end
    end

    def create
        @job = Job.create(job_params)
        render json: @job
    end

    def destroy
        @job = Job.find(params[:id])
        if @job
            @job.destroy
            render json: {message: "Job Deleted"}, status 200
        else
            render json: {error: "Unable to delete Job post"}, status: 400
        end
    end

    private

    def job_params
		params.require(:job).permit(:title, :employer, :location, :description, :release_date, :job_type)
    end
end
