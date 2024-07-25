import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character, Characters } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  http = inject(HttpClient);
  protected baseUrl: string = 'https://dattebayo-api.onrender.com';

  getCharacter(id?: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/characters/${id}`);
  }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/characters`);
  }
}
