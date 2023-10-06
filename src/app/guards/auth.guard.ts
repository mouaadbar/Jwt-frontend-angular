import { AuthService } from './../services/auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn:'root'

})


export class AuthGuard implements CanActivate {
  
  constructor(private userService : UserService,
              private authService : AuthService,
              private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
      if(this.userService.getJwtToken() !== null){
        const role =   route.data["roles"] as Array<String>

        if(role){
        const match = this.authService.roleMach(role)
        if(match){
          return true;
        }else {
          this.router.navigate(['forbidden']);
          return false;
        }
        }
      }
     this.router.navigate(['/login'])
     return false;
      
    }




} 