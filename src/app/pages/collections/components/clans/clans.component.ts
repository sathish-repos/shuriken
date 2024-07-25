import { Component, inject } from '@angular/core';
import { Clans } from '../../models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collection.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';

@Component({
  selector: 'nu-clans',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
})
export default class ClansComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Clans> = this.collectionsService.getClans();
  groupType = GroupTypeAction.CLANS;
}
