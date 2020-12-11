class Job{
    static table = document.getElementById("table-body");
    static api = new API("http://localhost:3000/jobs");

    constructor(job){
        this.job = job;
        this.RenderJobs();
        
        this.SearchForm();
        this.JobForm();
        this.JobListener("post");
        this.SearchListener("get");
    }

    //Render JSON Data in table

    JobHTML = () => {
        return `      
            <td>${this.job.agency.name}</td>
            <td>${this.job.title}</td>
            <td>${this.job.employer}</td>
            <td>${this.job.location}</td>
            <td>${this.job.description}</td>
            <td>${this.job.release_date}</td>
            <td>${this.job.job_type}</td>
            <td id="trash-job" data-id="${this.job.id}"><img class="delete" src="https://img.icons8.com/android/24/000000/trash.png"/></td>
    `;
    }

    //Parse and Render Job Object
    RenderJobs = () => {
        const table = this.constructor.table;
        const row = document.createElement("tr");
        this.row = row;
        row.innerHTML += this.JobHTML();
        row.addEventListener("click", this.deleteEvent)
        table.append(row);
    }

    //Instantantiate a new Job Object
    static GetAll = () => {
        this.api.GetJobs().then((data) => data.forEach((job) => new Job(job)));
    }

    //Forms

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

    //Search for a Job

    SearchForm = () => {
        const container = document.getElementById("search-form-container");
        container.innerHTML = `
        <form action="" id="search-form" method="get">
            <div class="form-row"> 
                <div class="col-auto">
                    <input class="form-control mb-2" type="text" name="query" placeholder="search"></input>
                </div>
                <div class="col-auto">
                    <input class="btn btn-info" type="submit" value="search">
                </div>
            </div>
        </form>
        `;
    }

    SearchListener = (requesttype) => {
        const form = document.getElementById("search-form");
        if(requesttype === "get"){
            form.addEventListener("submit", (e) => this.SearchEvent(e));
        }
    }

    SearchEvent = (event) => {
        event.preventDefault();
        const formdata = {
            query: event.target.query.value,
        };
        this.api.SearchJob(formdata);
    }


    //Delete Job

    deleteEvent = (event) => {
        if(event.target.className === "delete"){
            this.constructor.api.DeleteJob(this.job.id)
            .then((data) => this.removeTd());
        }
    }

    removeTd = () => {
        this.row.remove();
    }
}