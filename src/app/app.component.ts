import { Component } from '@angular/core';
import { PersonnesService } from "./personnes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exo2'; 
  id:string="";
  nom:string="";
  username:string="";
  phone :string="";
  email:string="";
  website:string="";
  liste:any[];
  constructor(private myFirstService:PersonnesService) { }
  ngOnInit(){
    this.liste=this.myFirstService.getAllUsers();
  }
  afficher(person){
    this.id=person.id;
    this.nom=person.name;
    this.username=person.username;
    this.phone=person.phone;
    this.email=person.email;
    this.website=person.website;
    console.log(person);
  }
}
