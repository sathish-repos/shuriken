import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nu-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  content = input<NavItems[]>(navItemsMock);
  toggleHidden() {
    document.getElementById('app-sidebar-1')?.classList.toggle('hidden');
  }
}

export type NavItems = {
  label: string;
  link: string;
  icon: string;
};

export const navItemsMock: NavItems[] = [
  {
    label: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    label: 'Akatsuki',
    link: '/akatsuki',
    icon: 'home',
  },
  {
    label: 'Characters',
    link: '/characters',
    icon: 'home',
  },
  {
    label: 'Clans',
    link: '/clans',
    icon: 'sitemap',
  },
  {
    label: 'Kara',
    link: '/kara',
    icon: 'home',
  },
  {
    label: 'Kekkei-genkai',
    link: '/kekkei-genkai',
    icon: 'slack',
  },
  {
    label: 'Taild-beasts',
    link: '/taild-beasts',
    icon: 'prime',
  },
  {
    label: 'Teams',
    link: '/teams',
    icon: 'users',
  },
  {
    label: 'Villages',
    link: '/villages',
    icon: 'graduation-cap',
  },
];
