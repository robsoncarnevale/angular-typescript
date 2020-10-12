import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginAutenticado: boolean = false;

  menuEmitter = new EventEmitter<boolean>();
  footerEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, 
    private snackBar: MatSnackBar) { }

/* Validações no Login */

showMessage(msg: string): void {
  this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
  })
}

  fazerLogin(logar: Login){
    if (logar.agencia==='1234' && 
        logar.conta === '000300') 
    {
        this.loginAutenticado = true;
        this.menuEmitter.emit(true);
        this.footerEmitter.emit(true);
        this.router.navigate(['/']);
        this.showMessage('Login efetuado!')
     
    } else {
        this.showMessage('Agencia e Conta Incorretos')
        this.loginAutenticado = false;
        this.menuEmitter.emit(false); 
        this.footerEmitter.emit(false); 
        this.router.navigate(['/contas']);
    }

  }

  loginPermissaoAutenticado(){
    return this.loginAutenticado;
  }

}
