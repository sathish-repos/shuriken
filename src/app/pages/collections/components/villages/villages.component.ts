import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, signal, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { Villages } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { ItemCountEnums, PageEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from '../../../shared/components/header/models/header.types';

@Component({
  selector: 'nu-villages',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent, PaginatorModule],
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.scss',
})
export default class VillagesComponent {
  collectionsService = inject(CollectionsService);

  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Villages>> = computed(() =>
    this.collectionsService.getVillages(this.currentPage(), this.pageSize())
  );
  groupType = GroupTypeAction.VILLAGES;

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;
  header = signal<Header>(VillagesHeaderMocks);

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

const VillagesHeaderMocks: Header = {
  title: 'Villages',
  description: `villages are powerful shinobi villages that belong to the Five Great Shinobi Countries.`,
};
