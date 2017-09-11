import { Injectable } from '@angular/core';
import { Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate
      } from "@angular/router";

//Para ver si la persona esta autenticada
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,
              state:RouterStateSnapshot){

    console.log(next);

    if( this.auth.isAuthenticated() ){
      console.log("Paso el guard");
      return true;
    } else {
      console.error("Bloqueado por el guard");
      return false;
    }
  }

}
