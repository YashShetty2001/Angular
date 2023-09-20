import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nested For Loop';
  users=['ram', 'shyam','lakshman','bharat', 'shatrungan']
  Userlist=[
  {name:'ram', email:'ram@test.com', phone:'8888', SocialAccounts:['gmail','insta','facebook','youtube']},
  {name:'shyam', email:'shyam@test.com', phone:'2222', SocialAccounts:['gmail','youtube','insta','facebook','youtube']},
  {name:'lakshman', email:'lakshman@test.com', phone:'3333', SocialAccounts:['yahoo','insta','facebook']},
  {name:'bharat', email:'bharat@test.com', phone:'4444', SocialAccounts:['gmail','insta','facebook','youtube']},
  {name:'shatrungan', email:'shatrungan@test.com', phone:'2222', SocialAccounts:['gmail','facebook','youtube']}
  ]
}
