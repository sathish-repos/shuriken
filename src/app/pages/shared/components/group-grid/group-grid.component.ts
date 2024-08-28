import { Component, inject, input } from '@angular/core';
import { Group } from '../../../collections/models';
import { Router } from '@angular/router';
import { GroupTypeAction } from '../../enums/group-type.enum';
import { GroupRouteService } from '../../services/group-routing.service';
import { Header } from '../header/models/header.types';
import { HeaderComponent } from '../header/header.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'nu-group-grid',
  standalone: true,
  imports: [HeaderComponent, SpinnerComponent],
  templateUrl: './group-grid.component.html',
  styleUrl: './group-grid.component.scss',
})
export class GroupGridComponent {
  router = inject(Router);
  groupRouteService = inject(GroupRouteService);
  content = input.required<Group[]>();
  groupType = input.required<GroupTypeAction>();
  header = input.required<Header>();

  navigateById(id: number) {
    this.groupRouteService.setGroupTypeAndID(this.groupType(), id);
    this.router.navigateByUrl(`/${this.groupType()}/${id.toString()}`);
  }
}
