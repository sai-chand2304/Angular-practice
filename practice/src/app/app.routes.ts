import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'parent',
        loadComponent: () => import('./components/parent/parent.component').then(m => m.ParentComponent)
    },
    {
        path:'home',
        loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
