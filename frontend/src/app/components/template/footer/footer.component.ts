import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../views/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  hideFooter: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.footerEmitter.subscribe(
      mostrarFooter => this.hideFooter = mostrarFooter
    );
  }

}
