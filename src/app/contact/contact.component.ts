import {Component, OnInit} from "@angular/core"

@Component({
    selector:'contact-recept',
    templateUrl: './contact.component.html'
})

export class ContactComponent{
    
    public name:string;
    public email:string;
    public message:string;

    onSubmit(){
        alert("Name:" + this.name + "\n" +
        "Email:" + this.email + "\n" +
        "Message:" + this.message + "\n")
    }
}