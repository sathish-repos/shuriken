import { Component, computed, inject, signal, Signal } from '@angular/core';
import { TailedBeasts } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { CollectionsService } from '../../services/collection.service';
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'nu-tailed-beasts',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './tailed-beasts.component.html',
  styleUrl: './tailed-beasts.component.scss',
  providers: [PaginationService],
})
export default class TailedBeastsComponent {
  collectionsService = inject(CollectionsService);
  paginationService = inject(PaginationService);
  currentPage = this.paginationService.currentPage;
  pageSize = this.paginationService.pageSize;

  content$: Signal<Observable<TailedBeasts>> = computed(() =>
    this.collectionsService.getTailedBeasts(this.currentPage(), this.pageSize())
  );
}
