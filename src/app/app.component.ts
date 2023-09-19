import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter in Angular';
  count:number=0;
  counter(val:string)
  {
    val==='add'? this.count++ :this.count--;
  }
  
}
