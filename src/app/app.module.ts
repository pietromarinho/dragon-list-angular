import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SnackBarLayoutComponent } from './shared/snack-bar-layout/snack-bar-layout.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
import { HomePageComponent } from './shared/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SnackBarLayoutComponent,
    LoaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
