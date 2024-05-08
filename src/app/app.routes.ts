import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'api-page',
    loadComponent: () => import('./api-page/api-page.page').then( m => m.ApiPagePage)
  },
  {
    path: 'dice',
    loadComponent: () => import('./dice/dice.page').then( m => m.DicePage)
  },
  {
    path: 'build',
    loadComponent: () => import('./build/build.page').then( m => m.BuildPage)
  },
  {
    path: 'web',
    loadComponent: () => import('./web/web.page').then( m => m.WebPage)
  },
];
