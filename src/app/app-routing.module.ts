import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { NavigationComponent } from './shared/navigation/navigation.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'dragon',
                loadChildren: () => import('./web/dragon/dragon.module').then(m => m.DragonModule),
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
