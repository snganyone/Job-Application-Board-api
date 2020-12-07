class Utility{
    //Job Form

    constructor(){
        this.button = document.getElementById("new-job");
        this.job_form = document.getElementById("new-job-form"); 
        //this.job_form.style.visibility = "hidden";

        this.button.addEventListener("click", this.FormPopup);
        this.PageLoad();
    }

    // Show/Hide Form

    DisplayForm = () => {
        if(this.job_form.style.visibility === "hidden"){
            this.job_form.style.visibility = "visible";
        } else{
            this.job_form.style.visibility = "hidden";    
        }
    }

    //Popup Form
    
    FormPopup = () => {
        modal.toggle();
    }

    PageLoad = () => {
        window.addEventListener('load', (event) => {
            console.log("Page Loaded");
        })
    }

}