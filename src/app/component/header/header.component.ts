import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: UserService,
              public authService:AuthService,
              private router:Router){}

    

  isLogin(){
    return this.userService.isLoggedIn()
  }

  logout(){
   
    this.userService.clearLocalStorage();
    this.router.navigate(['/home'])
    
  }



}
