import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public name:string ="";


 public FirstName:string = " ";
public LastName:string =" ";
public Email = " ";

public Password=" ";
// save =" ";

getData()
{
  //debugger;
  console.log(this.FirstName+ " " +this.LastName+" "+this.Email+" "+ this.Password)
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
