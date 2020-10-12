import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    rota: ActivatedRouteSnapshot,
    estado: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    if (this.loginService.loginPermissaoAutenticado()) {
      return true;
     
    
  
    } else {
      // this.router.navigate(['/produtos']);
      return false;
    }
  }

}
