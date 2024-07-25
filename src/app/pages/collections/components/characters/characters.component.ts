import { Component, inject } from '@angular/core';
import { Characters } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export default class CharactersComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Characters> = this.collectionsService.getCharacters();
}
