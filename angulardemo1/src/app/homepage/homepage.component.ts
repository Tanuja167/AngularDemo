import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
 Product = [
  {id:1,name:'pen',price:400 },
  {id:2,name:'notebook', price:450},
  {id:3,name:'laptop',price:45000}
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
