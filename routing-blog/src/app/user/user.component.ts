import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId:any=' ';

  constructor(private route:ActivatedRoute)
  {

  }
  ngOnInit():void{
    console.warn("the user id is",this.route.snapshot.paramMap.get('id'));
    this.userId=this.route.snapshot.paramMap.get('id');

    // ngOnInit(): void {
    //   // Subscribe to changes in the 'id' route parameter
    //   this.route.paramMap.subscribe(params => {
    //     // Update the 'userId' property when the parameter changes
    //     this.userId = params.get('id');
    //     console.warn("The user id is", this.userId);
        
    //     // You can also call a method here to fetch data based on the new 'userId'
    //     // Example: this.fetchUserData(this.userId);
    //   });
  }
}
