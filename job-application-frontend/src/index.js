document.addEventListener("DOMContentLoaded", () => {
    const api_service = new API("http://localhost:3000/jobs");

    const jobs = api_service.GetJobs(); 
});
