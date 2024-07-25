import { Component, inject } from '@angular/core';
import { Teams } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { CollectionsService } from '../../services/collection.service';

@Component({
  selector: 'nu-teams',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export default class TeamsComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Teams> = this.collectionsService.getTeams();
  groupType = GroupTypeAction.TEAMS;
}
