import { Component, input } from '@angular/core';
import { Character } from '../../../../../collections/models';
import {
  DebutComponent,
  FamilyComponent,
  JutsuComponent,
  NatureTypeComponent,
  PersonalComponent,
  RankComponent,
  ToolsComponent,
  UniqueTraitsComponent,
  VoiceActorsComponent,
} from './secton';

@Component({
  selector: 'nu-details',
  standalone: true,
  imports: [
    DebutComponent,
    FamilyComponent,
    JutsuComponent,
    NatureTypeComponent,
    PersonalComponent,
    RankComponent,
    ToolsComponent,
    UniqueTraitsComponent,
    VoiceActorsComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  content = input.required<Character>();
}
