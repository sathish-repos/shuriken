import { Group } from '.';

export interface Teams {
  teams: Group[];
  currentPage: number;
  pageSize: number;
  total: number;
}
