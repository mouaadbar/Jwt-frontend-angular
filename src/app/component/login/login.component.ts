import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
      constructor(private authService:AuthService,
                  private userService: UserService,
                  private router:Router){}
  
  ngOnInit(): void {
    
  }


  login(loginForm : NgForm){
       this.authService.login(loginForm.value).subscribe(
        (response: any)=>{
          console.log(response.user.roles)
          this.userService.setRoles(response.user.roles)
          this.userService.setJwtToken(response.token)
          const role = response.user.roles[0].roleName

          if(role === 'ROLE_ADMIN'){
              this.router.navigate(['/admin'])
          }else{
            this.router.navigate(['/user'])
          }
       
        },(error)=>{
          console.log(error)
        }
       )
  }

}
