class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    GetJobs = () => fetch(`${this.base_url}`).then(response => response.json());

    RenderJobs = (jobs) => {
        const table = document.getElementById("bootstrap-table");
        table.innerHTML = "";
        jobs.forEach((element) => table.innerHTML += jobHTML(element));
    }

    JobHTML = (jobs) => {
        return `
        <tbody>
        <tr>
            <th scope="row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </th>
        </tr>
    </tbody>`;
    }
}


