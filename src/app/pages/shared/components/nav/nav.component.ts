import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nu-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
    label: 'Characters',
    link: '/characters',
    icon: 'user',
  },
  {
    label: 'Akatsuki',
    link: '/akatsuki',
    icon: 'turkish-lira',
  },
  {
    label: 'Clans',
    link: '/clans',
    icon: 'sitemap',
  },
  {
    label: 'Kara',
    link: '/kara',
    icon: 'star',
  },
  {
    label: 'Teams',
    link: '/teams',
    icon: 'users',
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
    label: 'Villages',
    link: '/villages',
    icon: 'graduation-cap',
  },
];
