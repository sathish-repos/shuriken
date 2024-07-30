import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Teams } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { CollectionsService } from '../../services/collection.service';
import { PageEnums, ItemCountEnums } from '../../enums/collections.enums';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'nu-teams',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent, PaginatorModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export default class TeamsComponent {
  collectionsService = inject(CollectionsService);

  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Teams>> = computed(() =>
    this.collectionsService.getTeams(this.currentPage(), this.pageSize())
  );
  groupType = GroupTypeAction.TEAMS;

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
