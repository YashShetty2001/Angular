import { Component } from '@angular/core';
import{FormControl,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validation in Reactive form';
  loginForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z]+$')])

  })
loginUser(){
  console.warn(this.loginForm.value);
}

get user()
{
  return this.loginForm.get('name');
}
get email()
{
   return this.loginForm.get('email')
}
get password()
{
  return this.loginForm.get('password')
}
}
