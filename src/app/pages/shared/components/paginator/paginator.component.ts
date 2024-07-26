import { Component, input, model } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'nu-paginator',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  first: number = 0;
  rows: number = 25;
  currentPage = model.required<number>();
  pageSize = model.required<number>();
  totalItems = input.required<number>();

  onPageChange(event: any) {
    this.currentPage.set(event.page);
    this.pageSize.set(event.row);
    this.first = event.first;
    this.rows = event.rows;
  }
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
