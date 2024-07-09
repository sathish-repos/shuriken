import { Character } from ".";

export interface Karas {
  kara: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}
