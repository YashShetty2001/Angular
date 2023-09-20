import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For Loop';
  users=['ram', 'shyam','lakshman','bharat', 'shatrungan']
  Userlist=[
  {name:'ram', email:'ram@test.com', phone:'8888'},
  {name:'shyam', email:'shyam@test.com', phone:'2222'},
  {name:'lakshman', email:'lakshman@test.com', phone:'3333'},
  {name:'bharat', email:'bharat@test.com', phone:'4444'},
  {name:'shatrungan', email:'shatrungan@test.com', phone:'2222'}
  ]
}
