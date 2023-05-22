import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public authService: AuthService,
              public router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
      let expectedRoleArray = route.data;

      expectedRoleArray  = expectedRoleArray['expectedRole'];
      const token:any = localStorage.getItem('token');

      var tokenPayLoad:any;

      try{
        tokenPayLoad = jwt_decode(token);
       }catch(err){
        localStorage.clear();
        this.router.navigate(['/']);
      }
      let checkRole = false;

      for(let i=0; i< expectedRoleArray['length']; i++) {
        if(expectedRoleArray[i] == tokenPayLoad.role){
          checkRole = true;
        }
      }

      if(tokenPayLoad.role == 'admin' || tokenPayLoad.role == 'user'){

        if(this.authService.isAuthenticated() && checkRole ) return true;
        this.router.navigate(['/']);
        console.log('Unauthorized');
        return false;

      }else{
        this.router.navigate(['/']);
        return false;
      }


    }

    
}
