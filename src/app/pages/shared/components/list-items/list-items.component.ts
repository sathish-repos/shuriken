import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'nu-list-items',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
})
export class ListItemsComponent {
  content = input.required<string | string[] | undefined>();
  title = input<string>();
  applyGrid = input<boolean>(true);
  breakText = input<boolean>(false);

  isTypeString(content: string | string[] | undefined): boolean {
    if (typeof content === 'string') return true;
    return false;
  }
}
