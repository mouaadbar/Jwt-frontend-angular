import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

BASE_URL= "http://localhost:8080/api"
requestHeader = new HttpHeaders(
  {"No-Auth":"True"}
)

  constructor(private http: HttpClient,
              private userService:UserService) {}


   login(loginData: any){
    return this.http.post(this.BASE_URL+"/auth/sign-in", loginData, {headers:this.requestHeader})
   }

   public roleMach(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles : any = this.userService.getRoles();

    if(userRoles !== null && userRoles){

             for(let i=0; i<userRoles.length; i++){
              
              for(let j=0; j<allowedRoles.length;j++){
                
                if(userRoles[i].roleName===allowedRoles[j]){
                  isMatch=true;
                  return isMatch;
                }else {
                return isMatch;
                }
             }
            }
          }
          return isMatch;
        }
      }
