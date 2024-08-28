import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Karas } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe } from '@angular/common';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PageEnums, ItemCountEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from '../../../shared/components/header/models/header.types';

@Component({
  selector: 'nu-kara',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent, PaginatorModule],
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

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;
  header = signal<Header>(KaraHeaderMocks);

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

const KaraHeaderMocks: Header = {
  title: 'Kara',
  description: ` Kara is a secret society in Naruto that is made up of "Inners" and "Outers". The Inners are in charge of specific regions. The group's name literally means "shell" or "husk". Isshiki Ōtsutsuki was the leader of Kara before Code took over.`,
};
