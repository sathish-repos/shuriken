import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Akatsukis } from '../../models';
import { AsyncPipe } from '@angular/common';
import { CollectionsService } from '../../services/collection.service';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PaginationService } from '../../../shared/services/pagination.service';

@Component({
  selector: 'nu-akatsuki',
  standalone: true,
  imports: [CharacterGridComponent, AsyncPipe],
  templateUrl: './akatsuki.component.html',
  styleUrl: './akatsuki.component.scss',
  providers: [PaginationService],
})
export default class AkatsukiComponent {
  collectionsService = inject(CollectionsService);
  paginationService = inject(PaginationService);
  currentPage = this.paginationService.currentPage;
  pageSize = this.paginationService.pageSize;

  content$: Signal<Observable<Akatsukis>> = computed(() =>
    this.collectionsService.getAkatsukis(this.currentPage(), this.pageSize())
  );
}
