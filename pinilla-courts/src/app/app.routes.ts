import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage),
        canActivateChild: [AuthGuard],
      },
      {
        path: 'locations',
        loadComponent: () => import('./pages/tabs/locations/locations.page').then( m => m.LocationsPage),
        canActivateChild: [AuthGuard],
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/tabs/settings/settings.page').then( m => m.SettingsPage),
        canActivateChild: [AuthGuard],
      },
      {
        path: 'logout',
        redirectTo: '/home',
        pathMatch: 'full',
        canActivateChild: [AuthGuard],
      },
    ],
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
];
