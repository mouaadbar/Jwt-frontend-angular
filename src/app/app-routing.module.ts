import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']}},
  {path:"user", component:UserComponent,  canActivate:[AuthGuard], data:{roles:['ROLE_USER']}},
  {path:"login", component:LoginComponent},
  {path:"forbidden", component:ForbiddenComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
