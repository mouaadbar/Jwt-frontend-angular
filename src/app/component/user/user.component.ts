import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userService:UserService,
              private router: Router){}


  getPageForUser(){
    this.userService.getForUser().subscribe(
      (data:any)=>{
        console.log(data)
        this.router.navigate(['/user'])
      },(error)=>{
        console.log(error)
      }
    )
  }



  getPageForAdmin(){
    this.userService.getForAdmin().subscribe(
      (data:any)=>{
        console.log(data)
        this.router.navigate(['/admin'])
      },(error)=>{
        console.log(error)
      }
    )
  }

}
