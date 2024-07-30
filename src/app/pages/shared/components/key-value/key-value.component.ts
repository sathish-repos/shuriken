import { KeyValuePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'nu-key-value',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.scss',
})
export class KeyValueComponent {
  content = input.required<Object>();
  title = input<string>();
  keys = computed(() => Object.keys(this.content()!));

  getValue(key: any) {
    return (this.content() as any)[key];
  }
}
