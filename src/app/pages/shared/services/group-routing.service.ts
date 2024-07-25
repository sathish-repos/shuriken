import { Injectable, signal } from '@angular/core';
import { GroupTypeAction } from '../enums/group-type.enum';

@Injectable({ providedIn: 'root' })
export class GroupRouteService {
  groupType = signal<GroupTypeAction>(GroupTypeAction.CLANS);
  groupId = signal<number>(0);

  setGroupTypeAndID(type: GroupTypeAction, id: number) {
    this.groupType.set(type);
    this.groupId.set(id);
  }
}
