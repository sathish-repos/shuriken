import { Component, input } from '@angular/core';
import { Rank } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { KeyValueComponent } from '../../../../../key-value/key-value.component';

@Component({
  selector: 'nu-rank',
  standalone: true,
  imports: [FeedComponent, KeyValueComponent],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.scss',
})
export class RankComponent {
  content = input.required<Rank>();
}
