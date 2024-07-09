import { Component, input } from '@angular/core';
import { Rank } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';

@Component({
  selector: 'nu-rank',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.scss',
})
export class RankComponent {
  content = input.required<Rank>();
}
