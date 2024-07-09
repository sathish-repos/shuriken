import { Groups } from ".";

export interface Teams {
  teams: Groups[];
  currentPage: number;
  pageSize: number;
  total: number;
}

