document.addEventListener("DOMContentLoaded", () => {
    const api_service = new API("http://localhost:3000/jobs");
    api_service.GetJobs(); 
    api_service.SearchForm();
});
