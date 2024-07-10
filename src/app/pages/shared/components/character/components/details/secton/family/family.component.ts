import { Component, input } from '@angular/core';
import { Family } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'nu-family',
  standalone: true,
  imports: [FeedComponent, JsonPipe],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss',
})
export class FamilyComponent {
  content = input.required<Family>();
}
