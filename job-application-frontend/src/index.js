const modal = new bootstrap.Modal(document.querySelector('.modal'));

document.addEventListener("DOMContentLoaded", () => {
    //const api = new API("http://localhost:3000/agencies");
    //api.HandleFetch();
    
   Job.GetAll();
   Agency.GetAllAgencies();
   new JobForm();
    //Utility Class
    new Utility();
});

