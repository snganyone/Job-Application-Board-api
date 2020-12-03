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

    // const utility = new Utility();
    // console.log(utility);
    // utility.DisplayForm();

    
    let button = document.getElementById("new-job");
    let job_form = document.getElementById("new-job-form"); 

    function show(){
        job_form.style.visibility = "visible";
    }
    function hide(){
        job_form.style.visibility = "hidden";
    }

    function toggle(){
        if(job_form.style.visibility === "hidden"){
            show();
        } else{
            hide();
        }
    }
    hide();

    button.addEventListener("click", toggle, false);
});

