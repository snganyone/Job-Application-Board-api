class JobForm{
    static api = new API("http://localhost:3000/jobs");
    //Forms

    constructor(){
        this.JobForm();
        this.JobListener("post");
    }

    //Add New Job

    JobForm = () => {
        const job_container = document.getElementById("new-job-container");
        job_container.innerHTML = `
        <br>
        <div id="new-job-form">
        <form id="add-job-form">
            <select class="form-control" id="dropdown" name="agency_id">
            </select>
            <br>
            <div class="form-row">
                <div class="form-group col-md-6 mb-3">
                    <label>Job Title: </label>
                    <input class="form-control" type = "text" name="title">
                </div>

                <div class="form-group col-md-6">
                    <label>Employer: </label>
                    <input class="form-control" type="text" name="employer">
                </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Description: </label>
                        <input class="form-control" type="text" name="description">
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-md-6">
                    <label>Location: </label>
                    <input class="form-control" type="text" name="location">
                    </div>

                    <div class="col-md-4">
                    <label>Release Date: </label>
                    <input class="form-control" type="date" name="release_date">
                    </div>

                    <div class="col-md-2">
                    <label>Job Type: </label>
                    <input class="form-control" type="text" name="job_type">
                    </div>

                </div>

                <input class="btn btn-success" type="submit" value="submit">
            </div>
        </form>
        </div>`;
    }

    JobListener = (requesttype) => {
        const form = document.getElementById("add-job-form");
        if(requesttype === "post"){
            form.addEventListener("submit", (e) => this.JobEvent(e));
        }
    }

    JobEvent = (event) => {
        event.preventDefault();
        const formdata = {
            title: event.target.title.value,
            employer: event.target.employer.value,
            description: event.target.description.value,
            location: event.target.location.value,
            release_date: event.target.release_date.value,
            job_type: event.target.job_type.value,
            agency_id: event.target.agency_id.value
        };
        this.constructor.api.PostJob(formdata).then((job) => new Job(job));
        modal.toggle();
    }

    
    static Addtr = (job) => {
    const tr = this.JobHTML();
    const tbdy = document.getElementById("table-body");
    tbdy.innerHTML += tr;
    }

}