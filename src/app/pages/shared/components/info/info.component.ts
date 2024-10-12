import { Component, input } from '@angular/core';

@Component({
  selector: 'nu-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  title = input.required<string>();
  value = input.required<string>();
}
