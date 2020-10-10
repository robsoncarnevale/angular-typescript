import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Contas } from '../account.model';
 
@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: Contas = {
    name: "",
    cpf: null,
    celular: null,
    email: "",
    data: "",
    password: "",
    confirmpassword: ""

  }

  constructor(private accountService: AccountService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.accountService.create(this.account).subscribe(() => {
      this.accountService.showMessage('Conta Cadastrada')
      this.router.navigate(['/'])
    })

  } 

  cancel(): void {
    this.router.navigate(['/contas'])
  }

}
