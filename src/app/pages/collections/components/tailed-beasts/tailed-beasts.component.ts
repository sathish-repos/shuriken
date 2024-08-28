import { Component, computed, inject, signal, Signal } from '@angular/core';
import { TailedBeasts } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { CollectionsService } from '../../services/collection.service';
import { PageEnums, ItemCountEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from '../../../shared/components/header/models/header.types';

@Component({
  selector: 'nu-tailed-beasts',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent, PaginatorModule],
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

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;
  header = signal<Header>(TailedBeastsHeaderMocks);

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

const TailedBeastsHeaderMocks: Header = {
  title: 'TailedBeasts',
  description: `The tailed beasts are 12 living forms of chakra created by the Sage of Six Paths. They are also known as "Chakra Monsters".`,
};
