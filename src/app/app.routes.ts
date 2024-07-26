import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'akatsuki',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/collections/components/akatsuki/akatsuki.component'),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/shared/components/character/character.component'),
      },
    ],
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
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/collections/components/clans/clans.component'),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/shared/components/group/group.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/shared/components/character/character.component'),
          },
        ],
      },
    ],
  },
  {
    path: 'kara',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/collections/components/kara/kara.component'),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/shared/components/character/character.component'),
      },
    ],
  },
  {
    path: 'kekkei-genkai',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/collections/components/kekkei-genkai/kekkei-genkai.component'
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/shared/components/group/group.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/shared/components/character/character.component'),
          },
        ],
      },
    ],
  },
  {
    path: 'taild-beasts',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/collections/components/tailed-beasts/tailed-beasts.component'
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
    path: 'teams',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/collections/components/teams/teams.component'),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/shared/components/group/group.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/shared/components/character/character.component'),
          },
        ],
      },
    ],
  },
  {
    path: 'villages',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/collections/components/villages/villages.component'),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/shared/components/group/group.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/shared/components/character/character.component'),
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./pages/home/home.component') },
];
