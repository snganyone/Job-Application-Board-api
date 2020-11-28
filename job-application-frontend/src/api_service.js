class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    //Fetch Request to Rails API

    GetJobs = () => fetch(`${this.base_url}`).then(response => response.json()).then((data) => this.RenderJobs(data));

    //Render JSON Data in table

    JobHTML = (job) => {
        return `
        <tr>
            <td>${job.title}</td>
            <td>${job.employer}</td>
            <td>${job.location}</td>
            <td>${job.description}</td>
            <td>${job.release_date}</td>
            <td>${job.job_type}</td>
            <td><img src="https://img.icons8.com/android/24/000000/trash.png"/></td>
        </tr>`;
    }

    //Parse through JSON Data Object

    RenderJobs = (jobs) => {
        const table = document.getElementById("table-body");
        table.innerHTML = "";
        jobs.forEach((element) => (table.innerHTML += this.JobHTML(element)));
    }

    //Forms

    //Add New Job

    JobForm = () => {
        const job_container = document.getElementById("new-job-container");
        job_container.innerHTML = `
        <button class="btn btn-success" type="button" id="new-job">Add Job</button>
        <div id="new-job-form">
        <form id="add-job-form">
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
                    <input class="form-control" type="text" name="release_date">
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
            form.addEventListener("submit", (e) => this.PostJob(e));
        }
    }

    PostJob = (event) => {
        event.preventDefault();
        const formdata = {
            title: event.target.title.value,
            employer: event.target.employer.value,
            description: event.target.description.value,
            location: event.target.location.value,
            release_date: event.target.release_date.value,
            job_type: event.target.job_type.value,
        };
    }

    //Search for a Job


    SearchForm = () => {
        const container = document.getElementById("search-form-container");
        container.innerHTML = `
        <form action="" id="search-form" method="get">
            <div class="form-row"> 
                <div class="col-auto">
                    <input class="form-control mb-2" type="text" name="title" placeholder="search"></input>
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
            form.addEventListener("submit", (e) => this.SearchJob(e));
        }
    }

    SearchJob = (event) => {
        event.preventDefault();
        console.log(event);
    }
}


