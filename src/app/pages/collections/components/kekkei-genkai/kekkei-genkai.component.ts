import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { KekkeiGenkais } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { PageEnums, ItemCountEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'nu-kekkei-genkai',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent, PaginatorModule],
  templateUrl: './kekkei-genkai.component.html',
  styleUrl: './kekkei-genkai.component.scss',
})
export default class KekkeiGenkaiComponent {
  collectionsService = inject(CollectionsService);

  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<KekkeiGenkais>> = computed(() =>
    this.collectionsService.getKekkeiGenkais(
      this.currentPage(),
      this.pageSize()
    )
  );
  groupType = GroupTypeAction.KEKKEI_GENKAI;

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
