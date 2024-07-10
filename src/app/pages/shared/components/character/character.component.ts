import { Component, input } from '@angular/core';
import { Character } from '../../../collections/models';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PhotoComponent } from './components/photo/photo.component';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'nu-character',
  standalone: true,
  imports: [JsonPipe, CardModule, PhotoComponent, DetailsComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  content = input.required<Character>();
}
