import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';





import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  appUser:AppUser;
constructor(public auth:AuthService, 
       router:Router, 
      userService : UserService){
      auth.appUser$.subscribe(appUser=>this.appUser= appUser);
      auth.user$.subscribe(user=>{
        if(user){
  userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      });
     
    }
  logout(){
  this.auth.logout();
  }
  }

 


