import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
        ]
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent

    }
];
