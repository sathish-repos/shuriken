export interface Clans {
  clans: Groups[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Groups {
  id: number;
  name: string;
  characters: number[];
}
