import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate() {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (userData && userData.isLogin) {
        return true;
    }else {
        this._router.navigate(['./login']);
        return false;
    }
  }
}
