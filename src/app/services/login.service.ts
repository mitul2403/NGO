import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get ("http://localhost:4000/register");
  }
  // getuserbyusername(username:string){
  //   return this.http.get("http://localhost:4000/register/"+username);
  // }
  getuserbyusername(){
    return this.http.get("http://localhost:4000/register/patel");
  }
  // postuserdetail(){
  //   return this.http.post("http://localhost:4000/register",body);
  // }
}
