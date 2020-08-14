import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './shared/home-page/home-page.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
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
        component: HomePageComponent

    }
];
