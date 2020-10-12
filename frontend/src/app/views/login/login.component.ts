import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logar: Login = new Login();

  angForm: FormGroup;
  
  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder
              ) { 
                this.createForm();  
              }
              createForm() {
                this.angForm = this.formBuilder.group({
                     agencia: ['', Validators.required ],
                     conta: ['', Validators.required ]
                });
              }

  ngOnInit(): void {}

  login(): void {
    this.loginService.fazerLogin(this.logar)
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/'])
  }

  
}
