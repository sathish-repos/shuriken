import { Group } from '.';

export interface Villages {
  villages: Group[];
  currentPage: number;
  pageSize: number;
  total: number;
}
