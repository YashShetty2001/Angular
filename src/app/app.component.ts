import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular basic pipes';
  today=Date();
  item:string='';
  toupper(item:string)
  {
    return item.toUpperCase();
  }
}
