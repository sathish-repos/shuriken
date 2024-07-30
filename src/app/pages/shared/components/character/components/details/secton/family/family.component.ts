import { Component, input } from '@angular/core';
import { Family } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { KeyValueComponent } from '../../../../../key-value/key-value.component';

@Component({
  selector: 'nu-family',
  standalone: true,
  imports: [FeedComponent, KeyValueComponent],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss',
})
export class FamilyComponent {
  content = input.required<Family>();
}
