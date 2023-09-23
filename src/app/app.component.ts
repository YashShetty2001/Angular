import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusable component';
  
  userDetail=[
    {name:'Anil sidhu', email:'anil@TestBed.com'},
    {name:'Yash Shetty', email:'yash@TestBed.com'},
    {name:'Ram ragu', email:'Ram@TestBed.com'},
    {name:'ganesh mahadev', email:'ganesh@TestBed.com'},
    {name:'krishna yadav', email:'krishna@TestBed.com'}
  ]
}
