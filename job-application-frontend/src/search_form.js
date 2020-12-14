class SearchForm{
    static api = new API("http://localhost:3000/jobs");
    
    constructor(){        
        this.SearchForm();
        this.SearchListener("get");
    }
    //Search for a Job

    SearchForm = () => {
        const container = document.getElementById("search-form-container");
        container.innerHTML = `
        <form action="" id="search-form" method="get">
            <div class="form-row"> 
                <div class="col-auto">
                    <input class="form-control mb-2" type="text" name="query" placeholder="search"></input>
                </div>
                <div class="col-auto">
                    <input class="btn btn-info" type="submit" value="search">
                </div>
            </div>
        </form>
        `;
    }

    SearchListener = (requesttype) => {
        const form = document.getElementById("search-form");
        if(requesttype === "get"){
            form.addEventListener("submit", (e) => this.SearchEvent(e));
        }
    }

    SearchEvent = (event) => {
        event.preventDefault();
        const formdata = {
            query: event.target.query.value,
        };
        this.constructor.api.SearchJob(formdata);
    }

}