import { Component, inject, input, Input } from '@angular/core';
import { Group } from '../../../collections/models';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../../collections/services/collection.service';
import { GroupTypeAction } from '../../enums/group-type.enum';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GroupRouteService } from '../../services/group-routing.service';
import { GroupCharacterCardComponent } from './components/group-character-card/group-character-card.component';

@Component({
  selector: 'nu-group',
  standalone: true,
  imports: [AsyncPipe, GroupCharacterCardComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
})
export default class GroupComponent {
  collectionsService = inject(CollectionsService);
  groupRouteService = inject(GroupRouteService);

  groupType = this.groupRouteService.groupType;
  content$: Observable<Group> = {} as Observable<Group>;

  @Input()
  set id(paramId: string) {
    this.content$ = this.collectionsService.getGroup(this.groupType(), paramId);
  }
}
