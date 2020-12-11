class Agency{
    static api = new API("http://localhost:3000/agencies");

    constructor(agency){
        this.agency = agency;
        this.RenderDropdown();
    }

    static GetAllAgencies = () => {
        this.api.GetAgencies().then((data) => data.forEach((agency) => new Agency(agency)));
    }

    RenderDropdownHTML = () => {
        return `<option value="${this.agency.id}">${this.agency.name}</option>`;
    }

    RenderDropdown = () => {
        const select = document.getElementById("dropdown");
        const option = this.RenderDropdownHTML();
    }

}