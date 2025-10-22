import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'parent',
        loadComponent: () => import('./components/parent/parent.component').then(m => m.ParentComponent)
    }
];
