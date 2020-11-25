class API{
    constructor(base_url){
        this.base_url = base_url;
    }

    GetJobs = () => fetch(`${this.base_url}`).this(response => response.json);
}