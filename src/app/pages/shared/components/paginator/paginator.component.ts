import { Component, computed, input, output, signal } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import {
  ItemCountEnums,
  PageEnums,
} from '../../../collections/enums/collections.enums';

@Component({
  selector: 'nu-paginator',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  totalItems = input.required<number>();
  pageSize = output<number>();
  currentPage = output<number>();

  first = signal<number>(0);
  rows = signal<number>(PageEnums.ITEM_COUNT);

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.emitCurrentPageAndPageSize(event.page, event.rows);
  }

  emitCurrentPageAndPageSize(currentPage: number, PageSize: number) {
    this.currentPage.emit(currentPage);
    this.pageSize.emit(PageSize);
  }

  getCountArray = computed(() => [
    ItemCountEnums.LOW,
    ItemCountEnums.MEDIUM,
    ItemCountEnums.HIGH,
  ]);
}

export const mock: PageEvent = {
  page: 4,
  first: 400,
  rows: 100,
  pageCount: 15,
};

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
