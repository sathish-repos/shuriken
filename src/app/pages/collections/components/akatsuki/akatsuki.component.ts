import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Akatsukis } from '../../models';
import { AsyncPipe } from '@angular/common';
import { CollectionsService } from '../../services/collection.service';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { ItemCountEnums, PageEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from '../../../shared/components/header/models/header.types';
@Component({
  selector: 'nu-akatsuki',
  standalone: true,
  imports: [CharacterGridComponent, AsyncPipe, PaginatorModule],
  templateUrl: './akatsuki.component.html',
  styleUrl: './akatsuki.component.scss',
})
export default class AkatsukiComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Akatsukis>> = computed(() =>
    this.collectionsService.getAkatsukis(this.currentPage(), this.pageSize())
  );

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;
  header = signal<Header>(AkatsukiHeaderMocks);

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

const AkatsukiHeaderMocks: Header = {
  title: 'Akatsuki',
  description: `A group of shinobi that existed outside the usual system of hidden villages.
    Over the course of several decades, Akatsuki took different forms and was
    led by different individuals.`,
};
