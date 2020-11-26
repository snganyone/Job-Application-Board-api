const api_service = new API("http://localhost:3000/jobs");

console.log(api_service.GetJobs());


const table = document.getElementById("bootstrap-table");