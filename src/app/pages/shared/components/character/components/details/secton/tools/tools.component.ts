import { Component, input } from '@angular/core';
import { FeedComponent } from '../../../../../feed/feed.component';
import { ListItemsComponent } from '../../../../../list-items/list-items.component';

@Component({
  selector: 'nu-tools',
  standalone: true,
  imports: [FeedComponent, ListItemsComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  content = input.required<string[]>();
}
