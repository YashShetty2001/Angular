import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Style Binding';
  color='red';
  bgcolor='purple';
  counter:number=1;
  UpdateColor(){
    if(this.counter%2==0)
    {
    this.color='blue';
    this.bgcolor='yellow';
    }
    else{
      this.color='green';
      this.bgcolor='orange';
    }
    this.counter++;
  }
  
}
