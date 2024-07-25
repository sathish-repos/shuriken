import { Component, inject, input } from '@angular/core';
import { Group } from '../../../collections/models';
import { Router } from '@angular/router';
import { GroupTypeAction } from '../../enums/group-type.enum';
import { GroupRouteService } from '../../services/group-routing.service';

@Component({
  selector: 'nu-group-grid',
  standalone: true,
  imports: [],
  templateUrl: './group-grid.component.html',
  styleUrl: './group-grid.component.scss',
})
export class GroupGridComponent {
  router = inject(Router);
  groupRouteService = inject(GroupRouteService);
  content = input.required<Group[]>();
  groupType = input.required<GroupTypeAction>();

  navigateById(id: number) {
    this.groupRouteService.setGroupTypeAndID(this.groupType(), id);
    this.router.navigateByUrl(`/${this.groupType()}/${id.toString()}`);
  }
}
