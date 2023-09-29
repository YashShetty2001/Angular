import { Injectable } from '@angular/core';
import {datatype} from './users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
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
