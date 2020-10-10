import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contas } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3001/abriContas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
    })
  }


  /* Interação com o meu backend utilizando POST e OBSERVABLE generico */
  create(account: Contas): Observable<Contas> {
    return this.http.post<Contas>(this.baseUrl, account)
  }
}
