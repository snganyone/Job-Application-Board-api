class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    //Fetch Request to Rails API

    GetJobs = () => fetch(`${this.base_url}`).then(response => response.json())

    //Utilities
    async HandleFetch(){
        const f = await (fetch("http://localhost:3000/agencies"));
        const response = await f.json();
        return response;
    }

    CheckError = (response) => {
        if(response.status >= 200 && response.status <= 299){
            return response.json();
        } else {
            return Promise.reject({statusText: response.statusText});
        }
    }

     //GetAgencies = () => fetch(`${this.base_url}`).then(this.CheckError)
    GetAgencies = () => this.HandleFetch()
    //GetAgencies = () => this.AwaitFetch();

    PostJob = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        };
        return fetch(`${this.base_url}`, config).then((res) => res.json())
    }

    DeleteJob = (id) => {
        return fetch(`${this.base_url}` + `/${id}`, {method: "delete"})
        .then((res) => res.json())  
    }

    SearchJob = (data) => {
        const url = new URL(`${this.base_url}`);
        url.search = new URLSearchParams(data);
        fetch(url).then((res) => res.json()).then((data) => Job.SearchResults(data));
    }
}


