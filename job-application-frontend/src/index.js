const api_service = new API("http://localhost:3000/jobs");

const jobs = api_service.GetJobs() 

//const renderjobs = new API("http://localhost:3000/jobs").RenderJobs(jobs);

//console.log(api_service.GetJobs());
