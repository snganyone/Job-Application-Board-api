document.addEventListener("DOMContentLoaded", () => {
    const api_service = new API("http://localhost:3000/jobs");
    api_service.GetJobs(); 
    api_service.SearchForm();
    api_service.SearchListener("get");
    api_service.JobForm();

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

