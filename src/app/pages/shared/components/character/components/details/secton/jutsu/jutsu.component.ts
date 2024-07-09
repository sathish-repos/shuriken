import { Component, input } from '@angular/core';
import { FeedComponent } from '../../../../../feed/feed.component';

@Component({
  selector: 'nu-jutsu',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './jutsu.component.html',
  styleUrl: './jutsu.component.scss',
})
export class JutsuComponent {
  content = input.required<string[]>();
}
