import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './pages/shared/components/nav/nav.component';

@Component({
  selector: 'nu-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shuriken';
}
