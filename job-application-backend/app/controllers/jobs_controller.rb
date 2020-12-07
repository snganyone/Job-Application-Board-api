class JobsController < ApplicationController
    def index
        if(params[:query])
            @job = Job.search(params[:query])
            render json: @job
        else
            @jobs = Job.all
            render json: @jobs, except: [:created_at, :updated_at], include: :agency
        end
    end

    def show
        @job = Job.find(params[:id])
        render json: @job
    end

    def create
        @job = Job.create(job_params)
        render json: @job, except: [:created_at, :updated_at], include: :agency
    end

    def show
        @job = Job.find(params[:id])
        render json: @job
    end

    def destroy
        @job = Job.find(params[:id])
        if @job
            @job.destroy
            render json: {message: "Job Deleted", id: @job.id}
        else
            render json: {error: "Unable to delete Job post"}
        end
    end

    private

    def job_params
		params.require(:job).permit(:title, :employer, :location, :description, :release_date, :job_type, :agency_id)
    end
end
