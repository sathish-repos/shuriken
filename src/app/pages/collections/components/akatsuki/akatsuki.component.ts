import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Akatsukis } from '../../models';
import { AsyncPipe } from '@angular/common';
import { CollectionsService } from '../../services/collection.service';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { ItemCountEnums, PageEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
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
