import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { AppUser } from './models/app-user';
import {switchMap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {

  constructor(private auth:AuthService ,private userService:UserService) {}
  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(map((appUser :any) => appUser.isAdmin));
 }
}
