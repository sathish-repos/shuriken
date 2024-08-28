import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../collections/models';
import { AsyncPipe } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';
import { HeaderComponent } from '../header/header.component';
import { Header } from '../header/models/header.types';
import { SpinnerComponent } from '../spinner/spinner.component';
@Component({
  selector: 'nu-character-grid',
  standalone: true,
  imports: [AsyncPipe, PaginatorComponent, HeaderComponent, SpinnerComponent],
  templateUrl: './character-grid.component.html',
  styleUrl: './character-grid.component.scss',
})
export class CharacterGridComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  content = input.required<Character[]>();
  totalItems = input.required<number>();
  header = input.required<Header>();

  pageSize = output<number>();
  currentPage = output<number>();

  getStatus(status: string | undefined): string {
    return status ? status : 'Alive';
  }

  getStatusClass(status: string | undefined): string {
    return status ? 'bg-red-400' : 'bg-green-400';
  }

  navigateById(id: number) {
    this.router.navigate([`${id.toString()}`], { relativeTo: this.route });
  }
}
