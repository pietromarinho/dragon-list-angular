import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackType } from 'src/app/shared/feedback-body/feedback-body.model';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { Login } from '../models/login.model';
import { FeedBackService } from './feedback.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private router: Router,
    private feedService: FeedBackService,
    private dialog?: MatDialog
  ) { }

  public login(login: Login): void {
    LoaderService.show();
    if (login.usuario === 'admin' && login.senha === 'root') {
      localStorage.setItem('token', 'tokenOK');
      this.afterAuthenticate();
    } else {
      this.feedService.simpleFeed(SnackType.ERROR, 'Usuário ou senha inválido!');
      LoaderService.hide();
    }
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }

  public logout(): void {
    if (this.dialog) {
      this.dialog.closeAll();
    }

    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
  }

  private afterAuthenticate(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const currentRouteBroken: string[] = this.router.url.split('/');
      const currentRoute: string = currentRouteBroken[currentRouteBroken.length - 1];
      if (currentRoute === 'login') {
        this.router.navigate(['/dragoes']);
      }
    }
    LoaderService.hide();
  }

}
