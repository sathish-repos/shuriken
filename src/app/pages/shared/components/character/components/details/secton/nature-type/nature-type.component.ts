import { Component, input } from '@angular/core';
import { FeedComponent } from '../../../../../feed/feed.component';
import { ListItemsComponent } from '../../../../../list-items/list-items.component';

@Component({
  selector: 'nu-nature-type',
  standalone: true,
  imports: [FeedComponent, ListItemsComponent],
  templateUrl: './nature-type.component.html',
  styleUrl: './nature-type.component.scss',
})
export class NatureTypeComponent {
  content = input.required<string[]>();
}
