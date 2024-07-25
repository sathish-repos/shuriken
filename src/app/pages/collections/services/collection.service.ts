import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Akatsukis, Character, Characters } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  http = inject(HttpClient);
  protected baseUrl: string = 'https://dattebayo-api.onrender.com';

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/characters`);
  }
  getCharacter(id?: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/characters/${id}`);
  }

  getAkatsukis() {
    return this.http.get<Akatsukis>(`${this.baseUrl}/akatsuki`);
  }
}
