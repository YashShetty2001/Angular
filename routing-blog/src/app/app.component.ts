import { Component } from '@angular/core';

interface datatype{
  name:string,
  id:number,
  nationality:string,
  indian:boolean,
  address:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Model in Angular';
  getData()
  {
    const data:datatype={
      name:'yash',
      id:100,
      nationality:'indian',
      indian:true,
      address:"mohannagar,Pune"


    }
    return data;
  }
  
}
