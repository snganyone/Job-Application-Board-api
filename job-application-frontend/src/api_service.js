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
        </tr>`;
    }

    //Parse through JSON Data Object

    RenderJobs = (jobs) => {
        const table = document.getElementById("table-body");
        table.innerHTML = "";
        jobs.forEach((element) => (table.innerHTML += this.JobHTML(element)));
    }

    //Forms

    SearchForm = () => {
        const container = document.getElementById("form-container");
        container.innerHTML = "Hi";
        container.innerHTML = `
        <form class="form-row" action="" id="new-job-form">
        <div class="col-sm-3 my-1>
            <label>Title</label>
        </div>
        <div class="col-sm-2 my-1>
            <input class="form-control" type="text" name="title" placeholder="search"></input>
        </div>
            <input class="btn btn-primary" type="submit" value="search"></input>
        </form>
        `;
    }
}


