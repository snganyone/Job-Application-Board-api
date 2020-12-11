class Agency{
    static api = new API("http://localhost:3000/agencies");

    constructor(agency){
        this.agency = agency;
        this.RenderDropdown();
        this.RenderDropdownHTML();
    }

    static GetAllAgencies = () => {
        this.api.GetAgencies().then((data) => data.forEach((agency) => new Agency(agency)));
    }

    RenderDropdownHTML = () => {
        const options = document.createElement("option");
        options.value = `${this.agency.id}`;
        options.text = `${this.agency.name}`;
        return options;
        //return `<option value="${this.agency.id}">${this.agency.name}</option>`;
    }

    RenderDropdown = () => {
        const select = document.querySelector("select");
        console.log(select);
        const options = this.RenderDropdownHTML();
        select.add(options);
    }

}