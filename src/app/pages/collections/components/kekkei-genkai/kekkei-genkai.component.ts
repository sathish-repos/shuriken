import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { KekkeiGenkais } from '../../models';
import { CollectionsService } from '../../services/collection.service';
import { GroupTypeAction } from '../../../shared/enums/group-type.enum';
import { GroupGridComponent } from '../../../shared/components/group-grid/group-grid.component';

@Component({
  selector: 'nu-kekkei-genkai',
  standalone: true,
  imports: [AsyncPipe, GroupGridComponent],
  templateUrl: './kekkei-genkai.component.html',
  styleUrl: './kekkei-genkai.component.scss',
})
export default class KekkeiGenkaiComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<KekkeiGenkais> =
    this.collectionsService.getKekkeiGenkais();
  groupType = GroupTypeAction.KEKKEI_GENKAI;
}
