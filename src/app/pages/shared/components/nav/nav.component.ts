import { Component, input } from '@angular/core';

@Component({
  selector: 'nu-nav',
  standalone: true,
  imports: [],
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
    link: '/',
    icon: 'home',
  },
  {
    label: 'Characters',
    link: '/',
    icon: 'home',
  },
  {
    label: 'Clans',
    link: '/',
    icon: 'sitemap',
  },
  {
    label: 'Kara',
    link: '/',
    icon: 'home',
  },
  {
    label: 'Kekkei-genkai',
    link: '/',
    icon: 'slack',
  },
  {
    label: 'Taild-beasts',
    link: '/',
    icon: 'prime',
  },
  {
    label: 'Teams',
    link: '/',
    icon: 'users',
  },
  {
    label: 'Villages',
    link: '/',
    icon: 'graduation-cap',
  },
];
