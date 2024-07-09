import { Component, input } from '@angular/core';
import { Character } from '../../models';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  content = input<Character>();
}
