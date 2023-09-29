import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) {}
   url='https://randomuser.me/api'
    users(){
      return this.http.get(this.url)
    }
    saveusers(data:any)
    {
      return this.http.post(this.url,data)
    }
  }



