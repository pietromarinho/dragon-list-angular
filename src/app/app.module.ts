import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { CheckModalComponent } from './shared/check-modal/check-modal.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
import { MaterialModule } from './shared/material/material.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SnackBarLayoutComponent } from './shared/snack-bar-layout/snack-bar-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SnackBarLayoutComponent,
    LoaderComponent,
    HomePageComponent,
    NavigationComponent,
    CheckModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
