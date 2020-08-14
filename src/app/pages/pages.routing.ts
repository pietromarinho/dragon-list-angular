import { Routes } from '@angular/router';
import { LoginGuard } from '../security/login.guard';
import { LoginComponent } from './login/login.component';


export const PagesRoutes: Routes = [
    {

        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [LoginGuard]
            }
        ]
    }
];