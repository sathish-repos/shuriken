import { Component, computed, inject, signal, Signal } from '@angular/core';
import { TailedBeasts } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { CollectionsService } from '../../services/collection.service';
import { PageEnums } from '../../enums/collections.enums';

@Component({
  selector: 'nu-tailed-beasts',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './tailed-beasts.component.html',
  styleUrl: './tailed-beasts.component.scss',
})
export default class TailedBeastsComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<TailedBeasts>> = computed(() =>
    this.collectionsService.getTailedBeasts(this.currentPage(), this.pageSize())
  );
}
