import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Karas } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'nu-kara',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './kara.component.html',
  styleUrl: './kara.component.scss',
  providers:[PaginationService]
})
export default class KaraComponent {
  collectionsService = inject(CollectionsService);
  paginationService = inject(PaginationService);
  currentPage = this.paginationService.currentPage;
  pageSize = this.paginationService.pageSize;

  content$: Signal<Observable<Karas>> = computed(() =>
    this.collectionsService.getKaras(this.currentPage(), this.pageSize())
  );
}
