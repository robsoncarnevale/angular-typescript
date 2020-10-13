import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Contas } from '../account.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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



  angFormCadastro: FormGroup;

  checked = false;



  constructor(private accountService: AccountService, 
              private router: Router,
              private formBuilder: FormBuilder
              ) { 
                this.createForm();  
              }
  
  createForm() {
    this.angFormCadastro = this.formBuilder.group({
          name: ['', Validators.required, Validators.pattern('^[a-zA-Z\s]+$')],
          cpf: ['', Validators.required, Validators.pattern('\d{3}\.\d{3}\.\d{3}\-\d{2}$')],
          celular: ['', Validators.required, Validators.pattern('^[0-9]{2}-([0-9]{8}|[0-9]{9})') ],
          email: ['', Validators.required, Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$') ],
          data: [null, Validators.required, Validators.pattern('^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$') ],
          password: ['', Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$')],
          confirmpassword: ['', Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$')],
          checked: [Validators.requiredTrue ,Validators.pattern('true')]
    });
  }

  ngOnInit(): void {}

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
