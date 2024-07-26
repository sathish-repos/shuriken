import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Akatsukis,
  Character,
  Characters,
  Clans,
  Group,
  Karas,
  KekkeiGenkais,
  TailedBeasts,
  Teams,
  Villages,
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

  getCharacters(currentPage: number, pageSize: number): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/characters`, {
      params: this.getQueryParams(currentPage, pageSize),
    });
  }

  getAkatsukis(currentPage: number, pageSize: number) {
    return this.http.get<Akatsukis>(`${this.baseUrl}/akatsuki`, {
      params: this.getQueryParams(currentPage, pageSize),
    });
  }

  getClans() {
    return this.http.get<Clans>(`${this.baseUrl}/clans`);
  }

  getKaras(currentPage: number, pageSize: number) {
    return this.http.get<Karas>(`${this.baseUrl}/kara`, {
      params: this.getQueryParams(currentPage, pageSize),
    });
  }

  getKekkeiGenkais() {
    return this.http.get<KekkeiGenkais>(`${this.baseUrl}/kekkei-genkai`);
  }

  getTailedBeasts(currentPage: number, pageSize: number) {
    return this.http.get<TailedBeasts>(`${this.baseUrl}/tailed-beasts`, {
      params: this.getQueryParams(currentPage, pageSize),
    });
  }

  getTeams() {
    return this.http.get<Teams>(`${this.baseUrl}/teams`);
  }

  getVillages() {
    return this.http.get<Villages>(`${this.baseUrl}/villages`);
  }

  getQueryParams(currentPage: number, pageSize: number) {
    let params = new HttpParams();
    params = params.append('page', currentPage + 1);
    params = params.append('limit', pageSize);
    return params;
  }
}
