const modal = new bootstrap.Modal(document.querySelector('.modal'));

document.addEventListener("DOMContentLoaded", () => {
   Job.GetAll();
   Agency.GetAllAgencies();
    //Utility Class
    new Utility();
});

