import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Component } from '@angular/core';
import { AppUser } from './models/app-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
