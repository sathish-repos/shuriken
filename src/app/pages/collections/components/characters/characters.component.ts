import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Characters } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PageEnums, ItemCountEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent, PaginatorModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export default class CharactersComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Characters>> = computed(() =>
    this.collectionsService.getCharacters(this.currentPage(), this.pageSize())
  );

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;

  getCountArray = computed(() => [
    ItemCountEnums.LOW,
    ItemCountEnums.MEDIUM,
    ItemCountEnums.HIGH,
  ]);

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;

    this.currentPage.set(event.page);
    this.pageSize.set(event.rows);
  }
}
