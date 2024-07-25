import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character, Characters } from '../../../collections/models';
import { CollectionsService } from '../../../collections/services/collection.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'nu-character-grid',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './character-grid.component.html',
  styleUrl: './character-grid.component.scss',
})
export class CharacterGridComponent {
  content = input.required<Character[]>();
  router = inject(Router);

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
