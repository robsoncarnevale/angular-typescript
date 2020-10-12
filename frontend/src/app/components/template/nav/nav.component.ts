import { Component, OnInit } from '@angular/core';
import {LoginService} from './../../../views/login/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  hideMenu: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.menuEmitter.subscribe(
      mostrarMenu => this.hideMenu = mostrarMenu
    );
  }

}

