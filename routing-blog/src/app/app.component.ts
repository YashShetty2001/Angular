import { Component } from '@angular/core';
import {UserdataService} from './Services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services in angular';
  users:any;
  constructor(private userdata:UserdataService){
    console.warn('usedata',userdata.users());
    this.users=userdata.users();
    userdata.users().subscribe((data)=>{
    console.warn('data',data);
    this.users=data });

    

  }
  
  
}
