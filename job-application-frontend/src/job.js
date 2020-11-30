class Job{
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
        };
        this.PostJob(formdata);
    }

    PostJob = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(this.base_url, config);
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
            title: event.target.query.value,
        };
        this.SearchJob(formdata);
        console.log(this.SearchJob(formdata));
    }

    SearchJob = (data) => {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            //body: JSON.stringify(data),
        };
        fetch(this.base_url, config);
    }

    //Delete a Job

    DeleteJobListener = () => {
        const table = document.getElementById("bootstrap-table");
        table.addEventListener("click", (event) => this.DeleteEvent(event));

        const td = document.getElementsByClassName("delete");
        console.log(td);
        //td.addEventListener("click", this.DeleteEvent);
    }

    DeleteEvent = (event) => {
        console.log(event.target);
        if(event.target.className === "delete"){
            const delete_id = event.target.parentElement.dataset.id;
            this.DeleteJob(delete_id);
        }
    }

    DeleteJob = (id) => {
        fetch(this.base_url + `/${id}`, {method: "delete"})
        .then((res) => res.json())
        .then((data) => this.Removetd(data.id));
    }

    Removetd = (id) => {
        
        const td = document.querySelector(`[data-id="${id}"]`);
        td.parentElement.remove();
    }
}