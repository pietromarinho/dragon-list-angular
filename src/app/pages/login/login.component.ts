import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/providers/models/login.model';
import { FeedBackService } from 'src/app/providers/services/feedback.service';
import { SecurityService } from 'src/app/providers/services/security.service';
import { SnackType } from 'src/app/shared/feedback-body/feedback-body.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Login = new Login();

  constructor(
    private service: SecurityService
  ) { }

  ngOnInit(): void {
  }

  public doLogin() {
    if (this.user.usuario.length > 0 && this.user.senha.length > 0) {
      this.service.login(this.user);
    }
  }

}
