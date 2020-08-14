import { Routes } from '@angular/router';
import { DragonFormComponent } from './dragon-form/dragon-form.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';

export const DragonRoutes: Routes = [
    {

        path: '',
        children: [
            {
                path: '',
                component: DragonListComponent
            },
            {
                path: 'form',
                component: DragonFormComponent
            },
            {
                path: 'form/:id',
                component: DragonFormComponent
            }
        ]
    }
];