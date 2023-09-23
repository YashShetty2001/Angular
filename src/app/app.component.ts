import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Advanced pipes';
  today=Date();
  item:string='';
  user:{name:string,phn:number}={name:'yash',phn:123};
  toupper(item:string)
  {
    return item.toUpperCase();
  }
}
