const modal = new bootstrap.Modal(document.querySelector('.modal'));

document.addEventListener("DOMContentLoaded", () => {
   Job.GetAll();
   Agency.GetAllAgencies();
   new JobForm();
   new SearchForm();
    //Utility Class
    new Utility();
});

