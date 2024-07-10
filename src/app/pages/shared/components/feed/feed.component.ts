import { Component, input } from '@angular/core';

@Component({
  selector: 'nu-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  title = input<string>('Naruto (￣o￣) . z Z');
  icon = input<string>('sparkles');
  color = input<string>('blue-500');
}
