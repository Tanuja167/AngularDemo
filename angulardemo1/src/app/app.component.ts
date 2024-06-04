import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo1';
  name:string = "Tanuja";
  isDisabled:boolean = true;
  firstName = " ";
  lastName = " ";

  isShow:boolean = true;

  color:string = "Red";

  employees = [
    {id:1,name:'tanu',city:'pune'},
    {id:2,name:'rutu',city:'mumbai'},
    {id:3,name:'pooja',city:'nagar'}
  ];


  Name:string="Hello to All";

  d=new Date();

  salary:number=23450;

  price:number=45.69;
  weight:number=10.250;


  getData()
{
  debugger;
  console.log(this.firstName+ " " +this.lastName)
}
}






// ./file is inside same location,  ../in parent folder
