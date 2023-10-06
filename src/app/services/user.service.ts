
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL= "http://localhost:8080/api";
  constructor(private http :HttpClient) { }


  public setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(){
   const roleString = localStorage.getItem("roles")
   if(roleString != null){
        return JSON.parse(roleString)
   }
   else{
    console.log('error role does not exist')
    return null;
   }
  }


  public setJwtToken(jwtToken:string){
    localStorage.setItem("jwtToken", jwtToken)
  }

  public getJwtToken():string{
    
    const jwtToken = localStorage.getItem('jwtToken')
    if(jwtToken !=null){
      return jwtToken
    }else{
      return "no token in the localStorage";
    }

  }

  public clearLocalStorage(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getJwtToken()
  }



  public getForUser(){
    return this.http.get(this.BASE_URL+"/forUser", {responseType:"text"})
  }

  public getForAdmin(){
    return this.http.get(this.BASE_URL+"/forAdmin", {responseType:"text"})
  }

  

}
