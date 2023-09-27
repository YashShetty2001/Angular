import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {}
    users(){
      return[
      {name:'Anil', Age:'28', email:'anil@testbed.com'},
      {name:'sam', Age:'25', email:'sam@testbed.com'},
      {name:'peter', Age:'34', email:'peter@testbed.com'},
      ]
    }
  }



