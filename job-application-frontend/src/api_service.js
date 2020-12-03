class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    //Fetch Request to Rails API

    GetJobs = () => fetch(`${this.base_url}`).then(response => response.json()).then((data) => Job.RenderJobs(data));

    PostJob = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(`${this.base_url}`, config)
        .then((res) => res.json())
        .then((data) => Job.Addtr(data));
    }

    DeleteJob = (id) => {
        fetch(`${this.base_url}` + `/${id}`, {method: "delete"})
        .then((res) => res.json())
        .then((data) => Job.Removetd(data.id));
    }

    SearchJob = (data) => {
        const url = new URL(`${this.base_url}`);
        url.search = new URLSearchParams(data);
        fetch(url).then((res) => res.json()).then((data) => Job.RenderJobs(data));
    }

    AgencyDropdownForm = () => {
        fetch(`${this.base_url}`)
        .then(response => response.json())
        .then((data) => Agency.RenderDropdown(data));
    }
}


