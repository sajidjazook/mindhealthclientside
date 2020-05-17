import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(
    private router: Router
  ) {

  }
  canActivate() {
    if (localStorage.getItem("user")!=null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}