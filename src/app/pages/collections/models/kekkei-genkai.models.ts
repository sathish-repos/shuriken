import { Group } from '.';

export interface KekkeiGenkais {
  'kekkei-genkai': Group[];
  currentPage: number;
  pageSize: number;
  total: number;
}
