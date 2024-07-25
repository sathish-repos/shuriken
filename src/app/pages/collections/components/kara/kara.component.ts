import { Component, inject } from '@angular/core';
import { Karas } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';

@Component({
  selector: 'nu-kara',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './kara.component.html',
  styleUrl: './kara.component.scss',
})
export default class KaraComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Karas> = this.collectionsService.getKaras();
}
