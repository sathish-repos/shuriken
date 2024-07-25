import { Component, inject } from '@angular/core';
import { TailedBeasts } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { CollectionsService } from '../../services/collection.service';

@Component({
  selector: 'nu-tailed-beasts',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './tailed-beasts.component.html',
  styleUrl: './tailed-beasts.component.scss',
})
export default class TailedBeastsComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<TailedBeasts> =
    this.collectionsService.getTailedBeasts();
}
