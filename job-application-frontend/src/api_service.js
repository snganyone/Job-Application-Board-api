class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    GetJobs = () => fetch(`${this.base_url}`).then(response => response.json());

    RenderJobs = (jobs) => {
        const table = document.getElementById("table-body");
        table.innerHTML = "";
        jobs.forEach((element) => table.innerHTML += jobHTML(element));
    }

    JobHTML = (job) => {
        return `
        <tbody>
        <tr>
            <th scope="row">
                <td>${job.title}</td>
                <td>${job.employer}</td>
                <td>${job.location}</td>
                <td>${job.description}</td>
                <td>${job.release_date}</td>
                <td>${job.job_type}</td>
            </th>
        </tr>
    </tbody>`;
    }
}


