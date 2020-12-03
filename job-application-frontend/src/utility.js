class Utility{
    //Job Form

    constructor(){
        this.button = document.getElementById("new-job");
        this.job_form = document.getElementById("new-job-form"); 
        this.show = false;

        this.button.addEventListener("click", this.DisplayForm);
    }

    DisplayForm = () => {
        this.show = !this.show;
        this.job_form.style.visibility = "hidden";    
        if(this.show){
            this.job_form.style.visibility = "visible";
        } else{
            this.job_form.style.visibility = "hidden";    
        }
    }

}