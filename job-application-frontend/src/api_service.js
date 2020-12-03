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
        fetch(`${this.base_url}`, {method: "get"})
        .then((res) => res.json())
        .then((data) => Job.SearchEvent(data));
    }

    AgencyDropdownForm = () => {
        fetch(`${this.base_url}`)
        .then(response => response.json())
        .then((data) => Agency.RenderDropdown(data));
    }
}


