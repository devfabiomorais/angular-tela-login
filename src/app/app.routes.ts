import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/auth/auth').then(m => m.AuthComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./pages/register/register').then((m) => (m as any).RegisterComponent),
  },

];
