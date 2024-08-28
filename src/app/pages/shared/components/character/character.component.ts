import { Component, inject, Input, input, signal } from '@angular/core';
import { Character } from '../../../collections/models';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PhotoComponent } from './components/photo/photo.component';
import { DetailsComponent } from './components/details/details.component';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../../collections/services/collection.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'nu-character',
  standalone: true,
  imports: [
    AsyncPipe,
    CardModule,
    PhotoComponent,
    DetailsComponent,
    SpinnerComponent
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export default class CharacterComponent {
  collectionsService = inject(CollectionsService);
  content$: Observable<Character> = {} as Observable<Character>;

  @Input()
  set id(paramId: string) {
    this.content$ = this.collectionsService.getCharacter(paramId);
  }
}
