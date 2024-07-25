import { Component, inject, input, signal } from '@angular/core';
import { Character, Characters } from '../../models';
import { CharactersMocks } from '../../mocks';
import { CollectionsService } from '../../services/collection.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'nu-characters',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export default class CharactersComponent {
  content$: Observable<Characters>;
  collectionsService = inject(CollectionsService);
  router = inject(Router);

  constructor() {
    this.content$ = this.collectionsService.getCharacters();
  }

  getStatus(status: string | undefined): string {
    return status ? status : 'Alive';
  }

  getStatusClass(status: string | undefined): string {
    return status ? 'bg-red-400' : 'bg-primary-400';
  }

  navigateById(id: number) {
    this.router.navigateByUrl(`/characters/${id.toString()}`);
  }
}
