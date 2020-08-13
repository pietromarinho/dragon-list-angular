import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from "./login/login.component";
import { PagesRoutes } from "./pages.routing";


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class PagesModule { }