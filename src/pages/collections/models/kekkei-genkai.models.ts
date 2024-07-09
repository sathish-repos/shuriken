import { Groups } from '.';

export interface KekkeiGenkais {
  'kekkei-genkai': Groups[];
  currentPage: number;
  pageSize: number;
  total: number;
}
