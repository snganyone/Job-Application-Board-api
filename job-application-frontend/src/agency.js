class Agency{
    constructor(){
        this.api = new API("http://localhost:3000/agencies");
    }

    static RenderDropdownHTML = (agency) => {
        return `
        <a class="dropdown-item" href="#">${agency.name}</a>
        `;
    }

    static RenderDropdown = (agencies) => {
        const drop = document.getElementsByClassName("dropdown-menu");
        drop.innerHTML = "";
        agencies.forEach((element) => (drop.innerHTML += this.RenderDropdownHTML(element)));
    }

}