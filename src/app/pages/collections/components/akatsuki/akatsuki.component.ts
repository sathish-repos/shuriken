import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Akatsukis } from '../../models';
import { AsyncPipe } from '@angular/common';
import { CollectionsService } from '../../services/collection.service';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { PageEnums } from '../../enums/collections.enums';

@Component({
  selector: 'nu-akatsuki',
  standalone: true,
  imports: [CharacterGridComponent, AsyncPipe],
  templateUrl: './akatsuki.component.html',
  styleUrl: './akatsuki.component.scss',
})
export default class AkatsukiComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<PageEnums>(PageEnums.CURRENT_PAGE);
  pageSize = signal<PageEnums>(PageEnums.ITEM_COUNT);

  content$: Signal<Observable<Akatsukis>> = computed(() =>
    this.collectionsService.getAkatsukis(this.currentPage(), this.pageSize())
  );
}
