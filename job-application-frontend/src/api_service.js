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
        container.innerHTML = `
        <form action="" id="search-form">
            <div class="form-row"> 
                <div class="col-auto">
                    <input class="form-control mb-2" type="text" name="title" placeholder="search"></input>
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary" type="submit" value="search">Search</button>
                </div>
            </div>
        </form>
        `;
    }

    SearchListener = (requesttype) => {
        const form = document.getElementById("search-form");
        if(requesttype === "get"){
            form.addEventListener("submit", SearchJob());
        }
    }

    SearchJob = () => {

    }
}


