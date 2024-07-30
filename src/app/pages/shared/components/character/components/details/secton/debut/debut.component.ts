import { Component, input } from '@angular/core';
import { Debut } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { KeyValueComponent } from '../../../../../key-value/key-value.component';

@Component({
  selector: 'nu-debut',
  standalone: true,
  imports: [FeedComponent, KeyValueComponent],
  templateUrl: './debut.component.html',
  styleUrl: './debut.component.scss',
})
export class DebutComponent {
  content = input.required<Debut>();
}
