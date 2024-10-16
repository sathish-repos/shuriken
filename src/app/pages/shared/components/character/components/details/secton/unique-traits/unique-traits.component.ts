import { Component, input } from '@angular/core';
import { FeedComponent } from '../../../../../feed/feed.component';
import { ListItemsComponent } from '../../../../../list-items/list-items.component';

@Component({
  selector: 'nu-unique-traits',
  standalone: true,
  imports: [FeedComponent, ListItemsComponent],
  templateUrl: './unique-traits.component.html',
  styleUrl: './unique-traits.component.scss',
})
export class UniqueTraitsComponent {
  content = input.required<string[]>();
}
