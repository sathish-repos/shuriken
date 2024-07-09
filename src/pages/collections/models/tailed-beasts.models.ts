import { Character } from ".";

export interface TailedBeasts {
  'tailed-beasts': Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}
