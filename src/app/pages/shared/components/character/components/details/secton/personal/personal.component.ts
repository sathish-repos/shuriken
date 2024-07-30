import { Component, input } from '@angular/core';
import { Personal } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { ListItemsComponent } from '../../../../../list-items/list-items.component';
import { KeyValueComponent } from '../../../../../key-value/key-value.component';

@Component({
  selector: 'nu-personal',
  standalone: true,
  imports: [FeedComponent, ListItemsComponent, KeyValueComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent {
  content = input.required<Personal>();
}
