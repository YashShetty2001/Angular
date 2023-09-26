import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services in angular';
  userData=[
  { name:'yash', Mail:'yash@TestBed.com'},
  { name:'ram', Mail:'ram@TestBed.com'},
  { name:'rohit', Mail:'rohit@TestBed.com'},
  { name:'Shayam', Mail:'Shayam@TestBed.com'}

  
  ]
}
