import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { Villages } from '../../models';
import { CollectionsService } from '../../services/collection.service';

@Component({
  selector: 'nu-villages',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent],
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.scss',
})
export default class VillagesComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Villages> = this.collectionsService.getVillages();
  groupType = GroupTypeAction.VILLAGES;
}
