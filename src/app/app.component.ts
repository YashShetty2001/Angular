import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get input box value';
  displayvalue:string='';
  getvalue(val:string)
  {
    console.warn(val);
    this.displayvalue=val;
  }
  
}
