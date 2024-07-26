import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Characters } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent, PaginatorComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  providers: [PaginationService],
})
export default class CharactersComponent {
  collectionsService = inject(CollectionsService);
  paginationService = inject(PaginationService);
  currentPage = this.paginationService.currentPage;
  pageSize = this.paginationService.pageSize;

  content$: Signal<Observable<Characters>> = computed(() =>
    this.collectionsService.getCharacters(this.currentPage(), this.pageSize())
  );
}
