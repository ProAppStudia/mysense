import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'intro2',
    loadComponent: () => import('./intro2/intro2.page').then( m => m.Intro2Page)
  },
  {
    path: 'psychologists',
    loadComponent: () => import('./psychologists/psychologists.page').then(m => m.PsychologistsPage)
  },
  {
    path: 'psychologists/:id',
    loadComponent: () => import('./psychologist-detail/psychologist-detail.page').then(m => m.PsychologistDetailPage)
  },
  {
    path: 'tests',
    loadComponent: () => import('./tests/tests.page').then(m => m.TestsPage)
  },
];
