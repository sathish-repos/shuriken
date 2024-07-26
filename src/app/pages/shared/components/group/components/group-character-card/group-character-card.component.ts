import { Component, computed, inject, input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionsService } from '../../../../../collections/services/collection.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'nu-group-character-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './group-character-card.component.html',
  styleUrl: './group-character-card.component.scss',
})
export class GroupCharacterCardComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  collectionsService = inject(CollectionsService);
  characterID = input.required<number>();
  character = computed(() =>
    this.collectionsService.getCharacter(this.characterID().toString())
  );

  getStatus(status: string | undefined): string {
    return status ? status : 'Alive';
  }

  getStatusClass(status: string | undefined): string {
    return status ? 'bg-red-400' : 'bg-primary-400';
  }

  navigateById(id: number) {
    this.router.navigate([`${id.toString()}`], { relativeTo: this.route });
  }
}
