import { Component, input } from '@angular/core';
import { VoiceActors } from '../../../../../../../collections/models';
import { FeedComponent } from '../../../../../feed/feed.component';

@Component({
  selector: 'nu-voice-actors',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './voice-actors.component.html',
  styleUrl: './voice-actors.component.scss',
})
export class VoiceActorsComponent {
  content = input.required<VoiceActors>();
}
