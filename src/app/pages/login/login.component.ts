import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../../providers/services/feedback.service';
import { SnackType } from 'src/app/shared/feedback-body/feedback-body.model';
import { Login } from 'src/app/providers/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Login = new Login();

  constructor(
    private feedService: FeedBackService
  ) { }

  ngOnInit(): void {
  }

  doLogin() {
    if (this.user.usuario === 'admin' && this.user.senha === 'root') {
      this.feedService.simpleFeed(SnackType.SUCCESS, 'Logado');
    } else {
      this.feedService.simpleFeed(SnackType.ERROR, 'Usuário ou senha inválidos!');
    }
  }

}
