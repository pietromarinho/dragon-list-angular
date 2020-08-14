import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { FeedBackService } from 'src/app/providers/services/feedback.service';
import { SecurityService } from 'src/app/providers/services/security.service';
import { CheckModalComponent } from '../check-modal/check-modal.component';
import { SnackType } from '../feedback-body/feedback-body.model';
import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // @ViewChild('drawer', { static: true }) sidenav: MatSidenav;
  isMobile = false;

  constructor(
    private security: SecurityService,
    private router: Router,
    private dialog: MatDialog,
    private feedService: FeedBackService,

  ) {
    this.isMobile = window.innerWidth < 700 ? true : false;
    this.setRouterEvents();
    window.addEventListener('resize', () => {
      this.displayWindowSize();
    });
  }

  ngOnInit(): void {
  }

  public logout(): void {
    const dialogRef = this.dialog.open(CheckModalComponent, {
      width: '470px',
      data: 'Sair da aplicação?'
    });

    dialogRef.afterClosed().subscribe(
      (result: boolean) => {
        if (result) {
          this.security.logout();
        }
      });
  }

  goTo(route: string) {
    this.router.navigate([`${route}`]);
  }

  setRouterEvents(): void {
    this.router.events.subscribe(event => {
      // message error if module dont be loaded
      if (event.toString().toLowerCase().includes('error: loading chunk')) {
        LoaderService.hide();
        this.feedService.simpleFeed(SnackType.WARNING, 'Erro com a conexão :(');
      }

      // close sidebar when navigate if is mobile screen
      if (event instanceof RouterEvent && this.isMobile) {
        // setTimeout(() => {
        //   this.sidenav.close();
        // }, 300);
      }

      // show load between modules loading
      if (event instanceof RouteConfigLoadStart) {
        LoaderService.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          LoaderService.hide();
        }, 500);
      }
    });
  }

  displayWindowSize() {
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

}
