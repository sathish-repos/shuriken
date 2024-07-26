import { Injectable, signal } from '@angular/core';

@Injectable()
export class PaginationService {
  currentPage = signal<number>(0);
  pageSize = signal<number>(25);
}
