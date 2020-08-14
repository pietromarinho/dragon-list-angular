import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { DragonFormComponent } from "./dragon-form/dragon-form.component";
import { DragonListComponent } from "./dragon-list/dragon-list.component";
import { DragonRoutes } from './dragon.routing';



@NgModule({
    declarations: [DragonListComponent, DragonFormComponent],
    imports: [
        RouterModule.forChild(DragonRoutes),
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})
export class DragonModule { }