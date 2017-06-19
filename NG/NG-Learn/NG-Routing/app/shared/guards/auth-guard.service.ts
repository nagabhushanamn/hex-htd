import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate() {
    console.log('i am checking to see if you are logged in');
    //.................
    // this.router.navigate(['/login']);
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }



}