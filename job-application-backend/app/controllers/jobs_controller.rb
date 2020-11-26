class JobsController < ApplicationController
    def index
        @jobs = Job.all
        render json: @jobs, except: [:created_at, :updated_at]
    end
end
