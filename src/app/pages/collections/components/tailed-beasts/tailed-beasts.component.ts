import { Component, computed, inject, signal, Signal } from '@angular/core';
import { TailedBeasts } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';
import { CollectionsService } from '../../services/collection.service';

@Component({
  selector: 'nu-tailed-beasts',
  standalone: true,
  imports: [AsyncPipe, CharacterGridComponent],
  templateUrl: './tailed-beasts.component.html',
  styleUrl: './tailed-beasts.component.scss',
})
export default class TailedBeastsComponent {
  collectionsService = inject(CollectionsService);
  currentPage = signal<number>(0);
  pageSize = signal<number>(20);
  content$: Signal<Observable<TailedBeasts>> = computed(() =>
    this.collectionsService.getTailedBeasts(this.currentPage(), this.pageSize())
  );
}
