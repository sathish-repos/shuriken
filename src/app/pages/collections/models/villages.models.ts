import { Groups } from '.';

export interface Villages {
  villages: Groups[];
  currentPage: number;
  pageSize: number;
  total: number;
}
