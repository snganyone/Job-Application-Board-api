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

    JobForm = () => {
        const job_container = document.getElementById("new-job-container");
        job_container.innerHTML = `
        <button class="btn btn-success" type="button" id="new-job">Add Job</button>
        <div id="new-job-form">
        <form>
            <label>Job Title: </label>
            <input type = "text" name="title">
            <label>Employer: </label>
            <input type = "text" name="employer">
            <label>Description: </label>
            <input type = "text" name="description">
            <label>Location: </label>
            <input type = "text" name="location">
            <label>Release Date: </label>
            <input type = "text" name="release_date">
            <label>Job Type: </label>
            <input type = "text" name="job_type">

            <input type="submit" value="submit">
        </form>
        </div>`;
    }


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


