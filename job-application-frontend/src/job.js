class Job{
    static table = document.getElementById("table-body");
    static api = new API("http://localhost:3000/jobs");

    constructor(job){
        this.job = job;
        this.RenderJobs();
        
        this.SearchForm();
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
        this.constructor.api.SearchJob(formdata);
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