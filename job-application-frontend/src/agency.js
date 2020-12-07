class Agency{
    constructor(){
        this.api = new API("http://localhost:3000/agencies");
    }

    static RenderDropdownHTML = (agency) => {
        return `<option value="${agency.id}">${agency.name}</option>`;
    }

    static RenderDropdown = (agencies) => {
        const drop = document.getElementById("dropdown");
        agencies.forEach((element) => (drop.innerHTML += this.RenderDropdownHTML(element)));
    }

    RenderAgencyJobs = () => {
        
    }

}