import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../collections/models';
import { AsyncPipe } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'nu-character-grid',
  standalone: true,
  imports: [AsyncPipe, PaginatorComponent],
  templateUrl: './character-grid.component.html',
  styleUrl: './character-grid.component.scss',
})
export class CharacterGridComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  content = input.required<Character[]>();
  totalItems = input.required<number>();

  pageSize = output<number>();
  currentPage = output<number>();

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
