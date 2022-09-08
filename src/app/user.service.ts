import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModal } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url = "http://localhost:3000/Users"

  constructor(private http : HttpClient) { }
    // getAllUsers() :Observable<any> {
    //   return this.http.get("http://localhost:3000/Users")
    // }

   users(){
     return this.http.get(this.url)
   }

   saveUsers(data : any){
          return this.http.post(this.url,data)
   }
}
