import { Component, input } from '@angular/core';
import { Debut } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'nu-debut',
  standalone: true,
  imports: [FeedComponent, JsonPipe],
  templateUrl: './debut.component.html',
  styleUrl: './debut.component.scss',
})
export class DebutComponent {
  content = input.required<Debut>();
}
