import { Component, input } from '@angular/core';
import { Header } from './models/header.types';

@Component({
  selector: 'nu-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  content = input.required<Header>();
}
