class Agency{
    constructor(){
        this.api = new API("http://localhost:3000/agencies");
    }

    static RenderDropdown(agency){
        return `
        <a class="dropdown-item" href="#">${agency.name}</a>
        `;
    }
}