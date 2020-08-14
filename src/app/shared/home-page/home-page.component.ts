import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/providers/services/security.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  private checkRoute() {
    if (this.securityService.isAuthenticated()) {
      this.router.navigate(['dragon']);
      return;
    }

    this.securityService.logout();
  }
}
