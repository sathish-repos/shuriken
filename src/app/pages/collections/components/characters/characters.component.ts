import { Component, input } from '@angular/core';
import { Character } from '../../models';
import { CharacterComponent } from '../../../shared/components/character/character.component';
import { CharactersMocks } from '../../mocks';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export default class CharactersComponent {
  content = input<Character>();
  CharContent = CharactersMocks;
}
