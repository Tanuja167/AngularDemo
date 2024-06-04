import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName:string = "";
  Password = "";

  constructor() { }

  ngOnInit(): void {
  }

  

  getData()
{
  debugger;
  console.log(this.UserName+" "+this.Password)
}

}
