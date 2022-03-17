import { Injectable } from '@angular/core';
import { t } from '@angular/core/src/render3';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
 constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const token =window.localStorage.getItem('token');
      if (token) {
        this.router.navigate([''])
        return true

      }else{
        this.router.navigate(['login']);
        return false;
      }
  }
}
