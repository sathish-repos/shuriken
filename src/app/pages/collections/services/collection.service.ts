import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Akatsukis,
  Character,
  Characters,
  Clans,
  Group,
  Karas,
} from '../models';
import { Observable } from 'rxjs';
import { GroupTypeAction } from '../../shared/enums/group-type.enum';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  http = inject(HttpClient);
  protected baseUrl: string = 'https://dattebayo-api.onrender.com';

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/characters/${id}`);
  }

  getGroup(group: GroupTypeAction, id: string) {
    return this.http.get<Group>(`${this.baseUrl}/${group}/${id}`);
  }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/characters`);
  }

  getAkatsukis() {
    return this.http.get<Akatsukis>(`${this.baseUrl}/akatsuki`);
  }

  getClans() {
    return this.http.get<Clans>(`${this.baseUrl}/clans`);
  }

  getKaras() {
    return this.http.get<Karas>(`${this.baseUrl}/kara`);
  }

  getKekkeiGenkais() {
    return this.http.get<Karas>(`${this.baseUrl}/kekkei-genkai`);
  }
}
