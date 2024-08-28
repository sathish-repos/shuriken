import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Clans } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { ItemCountEnums, PageEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';
import { Header } from '../../../shared/components/header/models/header.types';

@Component({
  selector: 'nu-clans',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent, PaginatorModule],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
})
export default class ClansComponent {
  collectionsService = inject(CollectionsService);

  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Clans>> = computed(() =>
    this.collectionsService.getClans(this.currentPage(), this.pageSize())
  );
  groupType = GroupTypeAction.CLANS;

  first: number = 0;
  rows: number = PageEnums.ITEM_COUNT;
  header = signal<Header>(ClansHeaderMocks);

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

const ClansHeaderMocks: Header = {
  title: 'Clans',
  description: ` A listing of all the clans in Naruto series.`,
};
