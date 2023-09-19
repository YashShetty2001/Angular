import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  data ="Code step by step ";
  getdvalue()
  {
    return "Get funtion data";
  }
  getName(name:string)
  {
    alert( `hello ${name}`) ;
    
  }
  getdata(val:any)
  {
    console.warn(val);
  }
}
