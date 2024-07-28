import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Karas } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PageEnums } from '../../enums/collections.enums';

@Component({
  selector: 'nu-kara',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './kara.component.html',
  styleUrl: './kara.component.scss',
})
export default class KaraComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Karas>> = computed(() =>
    this.collectionsService.getKaras(this.currentPage(), this.pageSize())
  );
}
