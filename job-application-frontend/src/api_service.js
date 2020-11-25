class API{
    constructor(base_url){
        this.url = url;
    }

    GetJobs = () => fetch(`${this.base_url}`).this(response => response.json);
}