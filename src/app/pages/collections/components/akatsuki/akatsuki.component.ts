import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Akatsukis } from '../../models';
import { AsyncPipe } from '@angular/common';
import { CollectionsService } from '../../services/collection.service';
import { CharacterGridComponent } from '../../../shared/components/character-grid/character-grid.component';

@Component({
  selector: 'nu-akatsuki',
  standalone: true,
  imports: [CharacterGridComponent, AsyncPipe],
  templateUrl: './akatsuki.component.html',
  styleUrl: './akatsuki.component.scss',
})
export default class AkatsukiComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Akatsukis> = this.collectionsService.getAkatsukis();
}
