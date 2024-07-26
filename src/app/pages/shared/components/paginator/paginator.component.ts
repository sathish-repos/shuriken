import { Component, inject, input, model, signal } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'nu-paginator',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  paginationService = inject(PaginationService);

  first = signal<number>(0);
  rows = this.paginationService.pageSize;
  totalItems = input.required<number>();

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.paginationService.currentPage.set(event.page);
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
