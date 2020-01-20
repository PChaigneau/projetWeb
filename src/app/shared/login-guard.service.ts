import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private loginService:LoginService) { }

  canActivate(){
    return this.loginService.islogged();
  }
}
