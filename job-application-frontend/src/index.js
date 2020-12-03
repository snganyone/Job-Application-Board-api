document.addEventListener("DOMContentLoaded", () => {
    const api_service = new API("http://localhost:3000/jobs");
    api_service.GetJobs(); 

    const agency_api_service = new API("http://localhost:3000/agencies");
    agency_api_service.AgencyDropdownForm();

    const job = new Job();

    job.SearchForm();
    job.SearchListener("get");
    job.JobForm();
    job.JobListener("post");
    job.DeleteJobListener();

    //Utility Class
    const utility = new Utility();
    //Display Form on Button Click
    utility.DisplayForm();

});

