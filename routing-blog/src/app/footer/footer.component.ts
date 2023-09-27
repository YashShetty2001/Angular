import { Component } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data:any=[];
  constructor(private userdata:UserdataService)
  {
    console.warn("userdata",userdata.users);
    this.data=userdata.users();
  }
  
}
