import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'akatsuki',
    loadComponent: () =>
      import('./pages/collections/components/akatsuki/akatsuki.component'),
  },
  {
    path: 'characters',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/collections/components/characters/characters.component'
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/shared/components/character/character.component'),
      },
    ],
  },
  {
    path: 'clans',
    loadComponent: () =>
      import('./pages/collections/components/clans/clans.component'),
  },
  {
    path: 'kara',
    loadComponent: () =>
      import('./pages/collections/components/kara/kara.component'),
  },
  {
    path: 'kekkei-genkai',
    loadComponent: () =>
      import(
        './pages/collections/components/kekkei-genkai/kekkei-genkai.component'
      ),
  },
  {
    path: 'taild-beasts',
    loadComponent: () =>
      import(
        './pages/collections/components/tailed-beasts/tailed-beasts.component'
      ),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./pages/collections/components/teams/teams.component'),
  },
  {
    path: 'villages',
    loadComponent: () =>
      import('./pages/collections/components/villages/villages.component'),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./pages/home/home.component') },
];
